import React, { useState, useEffect, useRef } from "react";
import "./Inventory.css";
import { Card } from "antd";
import { Checkbox, Pagination } from "antd";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import { GrPowerReset } from "react-icons/gr";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import DynamicCreateShape from "../DynamicCreateShape/DynamicCreateShape";
import "swiper/css/pagination";
import img from "../InventryManagement/animatedImg.svg";
import locationIcon from "../InventryManagement/LocationIcon.svg";
import NamedSelectComponent from "../FilterSelect/NameSelectComponent";
import { Row, Col, Image } from "antd";
import Navbar from "../Navbar/Navbar";
import { Autoplay } from "swiper/modules";
import { TypeAnimation } from "react-type-animation";
import { Button, Modal, Tooltip } from "antd";
import MagicHeading from "../MagicHeading/MagicHeading";
import altImageInventory from "../MobileHome/new.png";
import BillBoardIcon from "./BillBoardIcon.svg";
const truncateText = (text, maxLength) => {
  // Check if text is a valid string before accessing its length property
  if (typeof text === "string" && text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  // Return an empty string if text is undefined, null, or not a string
  return text || "";
};

const Inventory = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const drawerRef = useRef(null);
  const [activeTab, setActiveTab] = useState("types");
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // State to manage current page
  const [pageSize, setPageSize] = useState(10); // State to manage page size
  const [totalItems, setTotalItems] = useState(10); // Total number of items
  const [checkedTypes, setCheckedTypes] = useState([]);
  const [checkedArea, setCheckedArea] = useState([]);
  const [mediaTypes, setMediaTypes] = useState([]);
  const [selectedItemsOnType, setSelectedItemsOnType] = useState([]);
  const [areas, setAreas] = useState([]);
  const [selectedItemsOnArea, setSelectedItemsOnArea] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalItem, setModalItem] = useState(null);
  const [selectedMediaType, setSelectedMediaType] = useState(null);
  const [filteredAreas, setFilteredAreas] = useState([]);
  const [selectedArea, setSelectedArea] = useState(null);
  const [filteredMediaTypes, setFilteredMediaTypes] = useState([]);
  const [filteredCount, setFilteredCount] = useState(0); // State for filtered data count
  const [filteredData, setFilteredData] = useState([]); // New state for filtered data
  const [allFilteredData, setAllFilteredData] = useState([]); // Base filtered data (isTrading === false && isArchived === false)
  const [optionCounts, setOptionCounts] = useState({});
  const [areaCounts, setAreaCounts] = useState({});
  const [clickedArea, setClickedArea] = useState(null);
  // Function to handle opening and closing of the modal
  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        setShowDrawer(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDrawer = () => {
    setShowDrawer((prevState) => !prevState); // Toggle the drawer state
  };

  useEffect(() => {
    const fetchData = async () => {
      console.log("hello", import.meta.env);
      try {
        const response = await fetch(
          `https://testapi.prepseed.com/inventoryManagement/v2`
        );
        // const response = await fetch(
        //   `http://localhost:4040/api/inventoryManagement/v2`
        // );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();

        // Filter the data to only include inventories where isTrading is false
        const filteredInventories =
          jsonData?.allInv?.filter(
            (item) => item?.isTrading === false && item?.isArchived === false
          ) || [];

        const typeNames = Array.from(
          new Set(
            filteredInventories
              .map((item) => item?.typeOfMedia?.name)
              .filter(Boolean)
          )
        );
        const areaNames = Array.from(
          new Set(
            filteredInventories
              .map((item) => item?.locations?.Area?.trim())
              .filter((area) => !!area) // Remove null/undefined
          )
        );

        setTotalItems(filteredInventories.length);
        setMediaTypes(typeNames);
        setAreas(areaNames);
        setAllFilteredData(filteredInventories); // Store base filtered data
        setFilteredData(filteredInventories); // Set the filtered data (only isTrading === false)
        setFilteredCount(filteredInventories.length); // Set the filtered count
        setData(jsonData); // Store the full data for reference
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleLocationClick = (lat, lng) => {
    console.log("Latitude:", lat);
    console.log("Longitude:", lng);
    // Construct Google Maps URL with latitude and longitude
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
    // Open Google Maps in a new tab
    window.open(googleMapsUrl, "_blank");
  };

  // Filter the data based on selected checkboxes
  useEffect(() => {
    if (allFilteredData.length === 0) return;

    const filtered = allFilteredData.filter((item) => {
      // Filter by type
      if (
        selectedItemsOnType.length > 0 &&
        !selectedItemsOnType.includes(item?.typeOfMedia?.name)
      ) {
        return false;
      }
      // Filter by area
      if (
        selectedItemsOnArea.length > 0 &&
        !selectedItemsOnArea.includes(item?.locations?.Area)
      ) {
        return false;
      }
      return true;
    });
    setFilteredData(filtered);
    setFilteredCount(filtered?.length || 0);
  }, [selectedItemsOnType, selectedItemsOnArea, allFilteredData]);

  const handlePaginationChange = (page, pageSize) => {
    setCurrentPage(page); // Update currentPage state
    setPageSize(pageSize); // Update pageSize state
  };

  // Empty dependency array means this effect will run once when the component mounts
  const uniqueNames = new Set();
  const uniqueAreaNames = new Set();
  const imgMap = [
    {
      img: img,
    },
    {
      img: img,
    },
    {
      img: img,
    },
  ];

  useEffect(() => {
    if (selectedItemsOnType.length > 0) {
      const filtered =
        allFilteredData
          ?.filter((item) =>
            selectedItemsOnType.includes(item?.typeOfMedia?.name)
          )
          ?.map((item) => item?.locations?.Area)
          ?.filter(Boolean) || [];
      setFilteredAreas(Array.from(new Set(filtered)));
    } else {
      setFilteredAreas(areas);
    }
  }, [selectedItemsOnType, allFilteredData, areas]);

  useEffect(() => {
    if (selectedItemsOnArea.length > 0) {
      const filtered =
        allFilteredData
          ?.filter((item) =>
            selectedItemsOnArea.includes(item?.locations?.Area)
          )
          ?.map((item) => item?.typeOfMedia?.name)
          ?.filter(Boolean) || [];
      setFilteredMediaTypes(Array.from(new Set(filtered)));
    } else {
      setFilteredMediaTypes(mediaTypes);
    }
  }, [selectedItemsOnArea, allFilteredData, mediaTypes]);

  const sortedMediaTypes =
    mediaTypes?.sort((a, b) => a?.localeCompare(b)) || [];
  const sortedAreas = areas?.sort((a, b) => a?.localeCompare(b)) || [];
  const uniqueFilteredAreas = [...new Set(filteredAreas || [])];
  // Log the count of the first option in the filters
  useEffect(() => {
    const counts = {};
    sortedMediaTypes?.forEach((type) => {
      const count =
        filteredData?.filter((item) => item?.typeOfMedia?.name === type)
          ?.length || 0;
      console.log(`Count of ${type}:`, count);
      counts[type] = count;
    });
    setOptionCounts(counts);
  }, [sortedMediaTypes, filteredData]);

  useEffect(() => {
    const counts = {};
    sortedAreas?.forEach((area) => {
      const count =
        filteredData?.filter((item) => item?.locations?.Area === area)
          ?.length || 0;
      console.log(`Count of ${area}:`, count);
      counts[area] = count;
    });
    setAreaCounts(counts);
  }, [sortedAreas, filteredData]);

  const handleAreaClick = (area) => {
    setClickedArea(area === clickedArea ? null : area);
  };

  return (
    <>
      <section
        className=" main-container-edit container p-0"
        id="InventoryFilters"
      >
        <div className="left-side-container">
          <div className="pc-filter-btn container">
            <div className="filter-select">
              <NamedSelectComponent
                options={
                  filteredMediaTypes?.map((type) => ({
                    label: `${type} (${optionCounts?.[type] || 0})`,
                    value: type,
                    count: optionCounts?.[type] || 0,
                  })) || []
                }
                title="Type"
                selectedItems={selectedItemsOnType}
                setSelectedItems={(items) => {
                  setSelectedItemsOnType(items);
                }}
                disabled={filteredMediaTypes?.length === 0}
              />

              <div className="small-slite-padding"></div>
              {/* <NamedSelectComponent
                                options={filteredAreas.map(area => ({
                                    label: `${area} (${areaCounts[area]})`,
                                    value: area,
                                    count: areaCounts[area]
                                }))}
                                title="Area"
                                selectedItems={selectedItemsOnArea}
                                setSelectedItems={(items) => {
                                    setSelectedItemsOnArea(items);
                                }}

                                disabled={filteredAreas.length === 0}
                            /> */}
              <NamedSelectComponent
                options={
                  uniqueFilteredAreas?.map((area) => ({
                    label: `${area} (${areaCounts?.[area] || 0})`,
                    value: area,
                    count: areaCounts?.[area] || 0,
                  })) || []
                }
                title="Area"
                selectedItems={selectedItemsOnArea}
                setSelectedItems={(items) => {
                  setSelectedItemsOnArea(items);
                }}
                disabled={uniqueFilteredAreas?.length === 0}
              />
            </div>
            <div className="filtered-count">
              <p style={{ color: "#FFED00", fontSize: "20px", margin: "0px" }}>
                Inventories: {filteredCount}
              </p>
            </div>
          </div>

          <br />
        </div>

        <div className="inventry-card-restucture">
          <Row style={{ display: "flex", justifyContent: "center" }}>
            {filteredData?.slice(0, 8)?.map((item) => (
              <Col lg={6} key={item?._id}>
                <div className="complete-card-design">
                  <div className="inside-card-data">
                    <div className="card-image-container">
                      <Image
                        src={item.img ? item.img : altImageInventory}
                        alt="YellowspotInventory"
                      />
                    </div>
                  </div>
                  <div className="location-details">
                    <div style={{ width: "100%" }} className="location-content">
                      <Tooltip title={item.locations?.name}>
                        <a
                          href="#"
                          onClick={() =>
                            handleLocationClick(item?.lat, item?.lng)
                          }
                        >
                          <p style={{ margin: "0px", color: "white" }}>
                            <img
                              src={locationIcon}
                              alt=""
                              style={{ color: "white" }}
                            />
                            &nbsp;
                            <span>
                              {truncateText(item.locations?.name, 20)}
                            </span>
                          </p>
                        </a>
                      </Tooltip>
                    </div>
                    <hr style={{ margin: "3px 0px" }} />
                    <div style={{ display: "flex", position: "absolute" }}>
                      <img
                        src={BillBoardIcon}
                        alt=""
                        style={{ width: "18%" }}
                      />
                      &nbsp;
                      <p style={{ marginBottom: "0px" }}>
                        {item?.typeOfMedia?.name || ""}
                      </p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div>
                        <span>Dimensions</span>
                      </div>
                      <div className="Content-info">
                        <DynamicCreateShape
                          width={item?.width}
                          height={item?.height}
                        />
                      </div>
                    </div>
                  </div>
                  <p style={{ margin: "5px 0px" }}>
                    Illumination:{" "}
                    {item.Illu
                      ? item.Illu === "FL"
                        ? "Front light"
                        : item.Illu === "BL"
                        ? "Back light"
                        : "No light"
                      : "No light"}
                  </p>
                </div>
              </Col>
            ))}

            <Modal
              title={
                <>
                  <h6>Inventory Details</h6>
                  <div className="filter-select">
                    <NamedSelectComponent
                      options={
                        filteredMediaTypes?.map((type) => ({
                          label: `${type} (${optionCounts?.[type] || 0})`,
                          value: type,
                          count: optionCounts?.[type] || 0,
                        })) || []
                      }
                      title="Type"
                      selectedItems={selectedItemsOnType}
                      setSelectedItems={(items) => {
                        setSelectedItemsOnType(items);
                      }}
                      disabled={filteredMediaTypes?.length === 0}
                    />

                    <div className="small-slite-padding"></div>
                    <NamedSelectComponent
                      options={
                        filteredAreas?.map((area) => ({
                          label: `${area} (${areaCounts?.[area] || 0})`,
                          value: area,
                          count: areaCounts?.[area] || 0,
                        })) || []
                      }
                      title="Area"
                      selectedItems={selectedItemsOnArea}
                      setSelectedItems={(items) => {
                        setSelectedItemsOnArea(items);
                      }}
                      disabled={filteredAreas?.length === 0}
                    />
                  </div>
                  <div
                    className="filtered-count"
                    style={{ margin: "0px 20px" }}
                  >
                    <p
                      style={{
                        color: "#FFED00",
                        fontSize: "20px",
                        fontWeight: "400",
                        margin: "0px",
                      }}
                    >
                      Inventories: {filteredCount}
                    </p>
                  </div>
                </>
              }
              width={1000}
              footer={null}
              visible={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <Row>
                {filteredData?.map((item) => (
                  <Col lg={8} key={item?._id}>
                    <div className="complete-card-design">
                      <div className="inside-card-data">
                        <div className="card-image-container">
                          <Image
                            src={item.img ? item.img : altImageInventory}
                            alt="YellowspotInventory"
                          />
                        </div>
                      </div>
                      <div className="location-details">
                        {/* <br /> */}
                        <div
                          style={{ width: "100%" }}
                          className="location-content"
                        >
                          <Tooltip title={item.locations?.name}>
                            <a
                              href="#"
                              onClick={() =>
                                handleLocationClick(item?.lat, item?.lng)
                              }
                            >
                              <p style={{ margin: "0px", color: "white" }}>
                                <img
                                  src={locationIcon}
                                  alt=""
                                  style={{ color: "white" }}
                                />
                                &nbsp;
                                <span>
                                  {truncateText(item.locations?.name, 20)}
                                </span>
                              </p>
                            </a>
                          </Tooltip>
                        </div>
                        <hr style={{ margin: "3px 0px" }} />
                        <div style={{ display: "flex", position: "absolute" }}>
                          <img
                            src={BillBoardIcon}
                            alt=""
                            style={{ width: "18%" }}
                          />
                          &nbsp;
                          <p style={{ marginBottom: "0px" }}>
                            {item?.typeOfMedia?.name || ""}
                          </p>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <div>
                            <span>Dimensions</span>
                          </div>
                          <div className="Content-info">
                            <DynamicCreateShape
                              width={item?.width}
                              height={item?.height}
                            />
                          </div>
                        </div>
                        <p style={{ margin: "5px 0px" }}>
                          Illumination:{" "}
                          {item.Illu
                            ? item.Illu === "FL"
                              ? "Front light"
                              : item.Illu === "BL"
                              ? "Back light"
                              : "No light"
                            : "No light"}
                        </p>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Modal>
          </Row>
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <button onClick={handleModal} className="all-btn-stylings">
              Show All Inventories
            </button>
          </div>
        </div>
      </section>
      <br />
      <br />
    </>
  );
};

export default Inventory;
