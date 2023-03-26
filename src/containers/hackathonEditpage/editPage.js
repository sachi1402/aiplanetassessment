import { useState } from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { editElement } from '../../features/hackthons/hackthonSlice';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Nav from "../../components/Nav/Nav";
import './editpage.css'
function EditForm() {
  const id = useLocation().state?.id
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const Detaisls = useSelector((state)=>state.myArray.find(e=> e.id === id)||null)
  const [title, setTitle] = useState(Detaisls.title);
  const [summary, setSummary] = useState(Detaisls.summary);
  const [description, setDescription] = useState(Detaisls.description);
  const [image, setCoverImage] = useState(Detaisls.image);
  const [hackathonName, setHackathonName] = useState(Detaisls.hackathonName);
  const [hackathonStartDate, setHackathonStartDate] = useState(Detaisls.hackathonStartDate);
  const [hackathonEndDate, setHackathonEndDate] = useState(Detaisls.hackathonEndDate);
  const [githubRepoLink, setGithubRepoLink] = useState(Detaisls.githubRepoLink);
  const [otherLinks, setOtherLinks] = useState(Detaisls.otherLinks);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = {
      id,
      title,
      summary,
      description,
      image,
      hackathonName,
      hackathonStartDate,
      hackathonEndDate,
      githubRepoLink,
      otherLinks,
    };
    dispatch(editElement(form));
    // reset form state
    setTitle('');
    setSummary('');
    setDescription('');
    setCoverImage({});
    setHackathonName('');
    setHackathonStartDate('');
    setHackathonEndDate('');
    setGithubRepoLink('');
    setOtherLinks('');
    Navigate("/description/:"+id,{state:{id}});
  };
  let handleImg=(e)=>{
    setCoverImage(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <div>
      <Nav/>
    <form onSubmit={handleSubmit}>
    <div className="Edit-component">
      <label htmlFor="title">Title:</label>
      <input type="text" id="title" className="Edit-input" value={title} onChange={(e) => setTitle(e.target.value)} />
    </div>
    <div className="Edit-component">
      <label htmlFor="summary">Summary:</label>
      <textarea id="summary" className="Edit-textarea" value={summary} onChange={(e) => setSummary(e.target.value)} />
    </div>
    <div className="Edit-component">
      <label htmlFor="description">Description:</label>
      <textarea id="description" className="Edit-textarea" value={description} onChange={(e) => setDescription(e.target.value)} />
    </div>
    <div className="Edit-component">
      <label htmlFor="image">Cover Image:</label>
      <input type="file" id="image" className="Edit-file" accept="image/*" onChange={(e) => handleImg(e)} />
    </div>  
    <div className="Edit-component">
      <label htmlFor="hackathonName">Hackathon Name:</label>
      <input type="text" id="hackathonName" className="Edit-input" value={hackathonName} onChange={(e) => setHackathonName(e.target.value)} />
    </div>
    <div className="Edit-component">
      <label htmlFor="hackathonStartDate">Hackathon Start Date:</label>
      <input type="date" id="hackathonStartDate" className="Edit-input" value={hackathonStartDate} onChange={(e) => setHackathonStartDate(e.target.value)} />
    </div>
    <div className="Edit-component">
      <label htmlFor="hackathonEndDate">Hackathon End Date:</label>
      <input type="date" id="hackathonEndDate" className="Edit-input" value={hackathonEndDate} onChange={(e) => setHackathonEndDate(e.target.value)} />
    </div>
    <div className="Edit-component">
      <label htmlFor="githubRepoLink">Github Repository Link:</label>
      <input type="url" id="githubRepoLink" className="Edit-input" value={githubRepoLink} onChange={(e) => setGithubRepoLink(e.target.value)} />
    </div>
    <div className="Edit-component">
      <label htmlFor="otherLinks">Other Links:</label>
      <textarea id="otherLinks" className="Edit-textarea" value={otherLinks} onChange={(e) => setOtherLinks(e.target.value)} />
    </div>
    <button type="submit" className="Edit-button">Submit</button>
  </form>
  </div>
);
}

export default EditForm;
