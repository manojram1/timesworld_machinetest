import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux';
import {actions as sliceActions} from "../slice"
import { createStructuredSelector } from "reselect";
import { getCountryData } from '../selectors';
import { Button, Card, Carousel, Col, Container, Row } from 'react-bootstrap';
import Header from '../../common/components/Header';
import Footer from '../../common/components/Footer';

const HomePage = (props) => {
  const { countryData={} }= props
  const dispatch= useDispatch()
  const [loadMoreItem, setLoadMoreItem] = useState(12); 

  const [filter, setFilter] = useState("All"); 


      useEffect(() => {
        axios.get('https://restcountries.com/v2/all?fields=name,region,flag').then((response) => {
          let data = response.data;
          if (filter && filter !== "All") {
            data = response?.data?.filter((val) => val?.region === filter);
          }
          dispatch(sliceActions.setCountriesDetails(data))
        });
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [filter]);

      const loadMoreFunction = () => {
        setLoadMoreItem((prev) => prev + 12);
      };

  return (
  <Container className='p-2' style={{fontFamily:"Noto Sans"}}>
    <Header setFilter={setFilter} filter={filter}/>
      <Carousel className='mt-4'>
        {countryData?.slice(0, 4)?.map((item, index) => (
          <Carousel.Item key={index}>
            <div style={{ textAlign: "center" }}>
              <img
                src={item?.flag || ""}
                alt={"flag_image"}
                style={{ width: "300px", height: "300px", objectFit: "cover", borderRadius: "8px", }}
              />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
       {countryData?.slice(0, loadMoreItem)?.reduce((rows, val, index) => {
        if (index % 2 === 0) {
          rows.push([]);
        }
        rows[rows.length - 1].push(val);
        return rows;
      }, [])?.map((row, index) => (
        <Row key={index}>
          {row?.map((val, index) => (
            <Col key={index} xs={12} md={6} lg={6} xl={6}>
              <Card  style={{marginTop:"20px"}}>
                <Card.Body>
                  <div style={{ display: "flex", gap: "20px" }}>
                    <div>
                      <img style={{ width: "127px", height: "96px" }} alt='flag_image' src={val?.flag || ""}></img>
                    </div>
                    <div>
                      <h4>{val?.name} </h4>
                      <h6>{val?.region} </h6>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ))}
      {countryData?.length > loadMoreItem && (
        <div className="d-flex justify-content-center mt-4 mb-4">
          <Button onClick={loadMoreFunction} style={{ width: "200px", backgroundColor: "#3C3C3C", border: "none" }}>
            Load More
          </Button>
        </div>
      )}
      <Footer/>
    </Container>
  )
}

const mapStateToProps = createStructuredSelector({
   countryData: getCountryData
});


export default connect(mapStateToProps, null)(HomePage);