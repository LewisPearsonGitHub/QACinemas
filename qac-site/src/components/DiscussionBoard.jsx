import React from "react";
import {
  CContainer,
  CFormInput,
  CForm,
  CRow,
  CCol,
  CFormCheck,
  CButton,
  CFormTextarea,
  CCard,
  CCardBody,
} from "@coreui/react";
import "./styles/DiscussionBoard.css";
import axios from "axios";
import { useEffect, useState } from "react";
import CommentCard from "./CommentCard";

const DiscussionBoard = () => {
	const [comments, setComments] = useState([]);

	useEffect(() => {
		  axios.get("http://localhost:4494/comments/getAll")
		  .then((res) => {
			console.log(res);
			setComments(res.data.data);
		})
		  .catch((err) => console.error(err))
	}, [comments])

  return (
	<>

    <CContainer>
      <h1 id="Title1"> Reviews and Discussion Board</h1>
	  <h3>
            {" "}
            Leave a review, We'd love to know what you thought of the movie!
          </h3>
		  <br/>
		  <CCard>
			<CCardBody>
		{comments.map((comment) => <CommentCard key={comment.comment_id} {...comment}/>)}
			</CCardBody>
		  </CCard>
      <CCard className="CardStyle" style={{ width: "40rem" }}>
        <CCardBody>
          <CForm>

            <CRow className="mb-3">
              <CCol sm={10}>
                <CFormInput
				required
                placeholder="Name"
				type="text"
				name="name"
                id="NameBox"
				style={{ margin: "auto" }}
                />
              </CCol>
            </CRow>

            <CRow className="mb-3">
              <CCol sm={10}>
                <CFormInput 
				required
				placeholder="Movie Name"
				type="text" 
				name="movie"
				id="MovieNameBox" 
				/>
              </CCol>
            </CRow>

            <CRow className="mb-3">
              <CFormTextarea
			  	required
                placeholder="Comment"
				type="comment" 
				name="comment"
                id="CommentBox"
                rows="3"
              />
            </CRow>

            <fieldset className="row mb-3">
              <legend className="col-form-label col-sm-2 pt-0">
                Movie Rating
              </legend>
              <CCol sm={10}>
                <CFormCheck
                  inline
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineCheckbox1"
                  value="option1"
                  label="1"
                />
                <CFormCheck
                  inline
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineCheckbox2"
                  value="option2"
                  label="2"
                />
                <CFormCheck
                  inline
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineCheckbox3"
                  value="option3"
                  label="3"
                />
                <CFormCheck
                  inline
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineCheckbox3"
                  value="option3"
                  label="4"
                />
                <CFormCheck
                  inline
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineCheckbox3"
                  value="option3"
                  label="5"
                />
              </CCol>
            </fieldset>

            <div className="d-grid d-md-flex justify-content-md-left">
              <CButton
			  className="me-md-2"
			  type="submit" 
			  color="primary">
				Submit
              </CButton>

              <CButton 
			  type="reset" 
			  color="dark">
				Reset
				</CButton>
            </div>

          </CForm>
        </CCardBody>
      </CCard>
    </CContainer>
	</>
  );
};

export default DiscussionBoard;