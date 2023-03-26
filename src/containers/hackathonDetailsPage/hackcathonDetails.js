import React, { useEffect } from 'react'
import Nav from '../../components/Nav/Nav'
import { useSelector, useDispatch } from 'react-redux'
import { deleteElement, toggleFav } from '../../features/hackthons/hackthonSlice'
import { useParams, useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { FaStar, FaRegStar, FaGithub } from 'react-icons/fa'
import './hackcathonDetails.css'

function HackcathonDetails() {
  let navigate = useNavigate('/')
  const id = useLocation().state?.id
  const dispatch = useDispatch()
  const hackathon = useSelector((state) =>
    state.myArray.find((e) => e.id == id) || null
  )

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this hackathon?')) {
      dispatch(deleteElement(hackathon.id))
      navigate('/')
    }
  }

  const handleEdit = () => {
    navigate('/edit/' + id, { state: { id } })
  }

  const handleToggleFav = () => {
    dispatch(toggleFav(hackathon.id))
  }

  return hackathon ? (
    <div className='hackathon-details'>
      <Nav />
      <div className='details-hero'>
        <div className='hero-image'>
          <img src={hackathon.image} alt={hackathon.title} />
        </div>
        <div className='hero-content'>
          <div className='hero-title'>
            <h1>{hackathon.title}</h1>
            <div className='hero-fav'>
              {hackathon.fav ? (
                <FaStar onClick={handleToggleFav} />
              ) : (
                <FaRegStar onClick={handleToggleFav} />
              )}
            </div>
          </div>
          <div className='hero-summary'>
            <p>{hackathon.summary}</p>
          </div>
          <div className='hero-btns'>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleEdit}>Edit</button>
          </div>
        </div>
      </div>
      <div className='details-page'>
        <div className='description'>
          <h4>Description</h4>
          <p>{hackathon.description}</p>
        </div>
        <div className='hackathon-details'>
          <div className='hackathon-details-item'>
            <h5>Hackathon</h5>
            <h2>{hackathon.hackathonName}</h2>
            <p>
              {hackathon.hackathonStartDate} - {hackathon.hackathonEndDate}
            </p>
          </div>
          <div className='hackathon-details-item'>
            {hackathon.githubRepoLink && (
              <a href={hackathon.githubRepoLink} target='_blank'>
                <button className='github-link'>
                  <FaGithub />
                  <span>GitHub</span>
                </button>
              </a>
            )}
            {hackathon.otherLink && (
              <a href={hackathon.otherLink} target='_blank'>
                <button>Other Link</button>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  ) : null
}

export default HackcathonDetails
