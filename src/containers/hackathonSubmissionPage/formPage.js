import { useState } from "react";
import { useDispatch } from "react-redux";
import { addElement } from "../../features/hackthons/hackthonSlice";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import "./formpage.css"
import Nav from "../../components/Nav/Nav";
function SubmissionForm() {
  const dispatch = useDispatch();

  const Navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [description, setDescription] = useState("");
  const [image, setCoverImage] = useState("");
  const [hackathonName, setHackathonName] = useState("");
  const [hackathonStartDate, setHackathonStartDate] = useState("");
  const [hackathonEndDate, setHackathonEndDate] = useState("");
  const [githubRepoLink, setGithubRepoLink] = useState("");
  const [otherLinks, setOtherLinks] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = {
      id: uuidv4(),
      title,
      summary,
      description,
      image,
      hackathonName,
      hackathonStartDate,
      hackathonEndDate,
      githubRepoLink,
      otherLinks,
      fav: false,
    };
    console.log(form.id,'sdsd222')
    dispatch(addElement(form));
    // reset form state
    setTitle("");
    setSummary("");
    setDescription("");
    setCoverImage({});
    setHackathonName("");
    setHackathonStartDate("");
    setHackathonEndDate("");
    setGithubRepoLink("");
    setOtherLinks("");
    Navigate("/");
  };
  let handleImg = (e) => {
    setCoverImage(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <div className="form-container">
  <Nav className="nav" />

  <form onSubmit={handleSubmit}>
    <div className="form-group">
      <label htmlFor="title" className="form-label">Title:</label>
      <input
        type="text"
        id="title"
        className="form-control"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </div>
    <div className="form-group">
      <label htmlFor="summary" className="form-label">Summary:</label>
      <textarea
        id="summary"
        className="form-control"
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
      />
    </div>
    <div className="form-group">
      <label htmlFor="description" className="form-label">Description:</label>
      <textarea
        id="description"
        className="form-control"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </div>
    <div className="form-group">
      <label htmlFor="image" className="form-label">Cover Image:</label>
      <input
        type="file"
        id="image"
        className="form-control"
        accept="image/*"
        onChange={(e) => handleImg(e)}
      />
    </div>
    <div className="form-group">
      <label htmlFor="hackathonName" className="form-label">Hackathon Name:</label>
      <input
        type="text"
        id="hackathonName"
        className="form-control"
        value={hackathonName}
        onChange={(e) => setHackathonName(e.target.value)}
      />
    </div>
    <div className="form-group">
      <label htmlFor="hackathonStartDate" className="form-label">Hackathon Start Date:</label>
      <input
        type="date"
        id="hackathonStartDate"
        className="form-control"
        value={hackathonStartDate}
        onChange={(e) => setHackathonStartDate(e.target.value)}
      />
    </div>
    <div className="form-group">
      <label htmlFor="hackathonEndDate" className="form-label">Hackathon End Date:</label>
      <input
        type="date"
        id="hackathonEndDate"
        className="form-control"
        value={hackathonEndDate}
        onChange={(e) => setHackathonEndDate(e.target.value)}
      />
    </div>
    <div className="form-group">
      <label htmlFor="githubRepoLink" className="form-label">Github Repository Link:</label>
      <input
        type="url"
        id="githubRepoLink"
        className="form-control"
        value={githubRepoLink}
        onChange={(e) => setGithubRepoLink(e.target.value)}
      />
    </div>
    <div className="form-group">
      <label htmlFor="otherLinks" className="form-label">Other Links:</label>
      <textarea
        id="otherLinks"
        className="form-control"
        value={otherLinks}
        onChange={(e) => setOtherLinks(e.target.value)}
      />
    </div>

    <button type="submit" className="submit-button">Submit</button>
  </form>
</div>

  );
}

export default SubmissionForm;
