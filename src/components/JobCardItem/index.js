import {Link} from 'react-router-dom'
import {MdLocationOn} from 'react-icons/md'
import {AiFillStar} from 'react-icons/ai'
import './index.css'

const JobCardItem = props => {
  const {item} = props
  const {
    id,
    companyLogoUrl,
    title,
    packagePerAnnum,
    jobDescription,
    employmentType,
    rating,
    location,
  } = item

  return (
    <li className="job-item-container">
      <Link className="link-item" to={`/jobs/${id}`}>
        <div className="first-part-container">
          <div className="img-title-container">
            <img
              className="company-logo"
              src={companyLogoUrl}
              alt="company logo"
            />
            <div className="title-rating-container">
              <h1 className="title-heading">{title}</h1>
              <div className="star-rating-container">
                <AiFillStar className="star-icon" />
                <p className="rating-text">{rating}</p>
              </div>
            </div>
          </div>
          <div className="location-package-container">
            <div className="job-type-location-container">
              <div className="location-container">
                <MdLocationOn className="location-icon" />
                <p className="location">{location}</p>
              </div>
              <div className="employment-type-container">
                <p className="job-type">{employmentType}</p>
              </div>
            </div>
            <div>
              <p className="package">{packagePerAnnum}</p>
            </div>
          </div>
        </div>
        <hr className="hr-line" />
        <div className="second-part-container">
          <h1 className="description-heading">Description</h1>
          <p className="description">{jobDescription}</p>
        </div>
      </Link>
    </li>
  )
}

export default JobCardItem
