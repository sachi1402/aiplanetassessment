import { React, useEffect, useState } from "react";
import Nav from "../../components/Nav/Nav";
import Card from "../../components/Card/Card";
import testimg from "../../assets/InterviewMe.png";
import handimg from "../../assets/Hand holding bulb 3D.png";
import { useSelector, useDispatch } from "react-redux";
import "./LandingPage.css";
import { Link } from "react-router-dom";

function LandingPage() {
  const hackathons = useSelector((state) => state.myArray);
  const [submissions, setSubmissions] = useState(hackathons);
  const [selcetdbtn, setselcetdbtn] = useState(true);
  const [filteredSubmissions, setFilteredSubmissions] = useState(hackathons);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("newest");

  useEffect(() => {
    // setFilteredSubmissions([...hackathons]);
  }, []);

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = submissions.filter((submission) => {
      return submission.title.toLowerCase().includes(term);
    });
    setFilteredSubmissions(filtered);
  };

  const handleFilter = (event) => {
    setFilter(event.target.value);
    const sorted = [...filteredSubmissions].sort((a, b) => {
      if (event.target.value === "newest") {
        return new Date(b.hackathonStartDate) - new Date(a.hackathonStartDate);
      } else {
        return new Date(a.hackathonStartDate) - new Date(b.hackathonStartDate);
      }
    });
    setFilteredSubmissions(sorted);
  };

  const handleAllSubmissions = () => {
    setFilteredSubmissions(submissions);
    setselcetdbtn(true);
  };

  const handleFavoriteSubmissions = () => {
    const favorites = submissions.filter((submission) => {
      return submission.fav === true;
    });
    setFilteredSubmissions(favorites);
    setselcetdbtn(false);
  };

  return (
    <div>
      <Nav />
      <div className="hero-contaner">
        <div className="hero-title">
          <h1 className="hearo-heading">Hackathon Submission</h1>
          <p className="hearo-desc">
            {" "}
            Lorem ipsum dolor sit amet consectetur. Urna cursus amet
            pellentesque in parturient purus feugiat faucibus. Congue laoreet
            duis porta turpis eget suspendisse ac pharetra amet. Vel nisl tempus
            nec vitae.{" "}
          </p>
          <Link to="/submit" class="btn-upload">
            Upload Submission
          </Link>
        </div>
        <div className="hero-img">
          <img className="" src={handimg} alt="placeholder" />
        </div>
      </div>

      <div className="cards-contnaer">
        <div className="card-control-pnal">
          <div>
            <button className={selcetdbtn&&"active"} onClick={handleAllSubmissions}>  All Submissions </button>
            <button className= {!selcetdbtn&&"active"} onClick={handleFavoriteSubmissions}> Favorite Submissions </button>
          </div>
          <div>
            <input type="text" value={searchTerm} onChange={handleSearch} />
            <select value={filter} onChange={handleFilter}>
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>
        </div>
      </div>
    <div className="hackathon-card-bag">
    <div className="hackathon-card-cont">
      {filteredSubmissions.map((submission) => (
        <Card
          key={submission.id}
          id={submission.id}
          image={submission.image}
          heading={submission.title}
          description={submission.summary}
          posted={submission.hackathonStartDate}
        />
      ))}
      </div>
    </div>
    </div>
  );
}

export default LandingPage;
