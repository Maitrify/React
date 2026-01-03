import React from 'react'
import {Bookmark} from 'lucide-react'
import Card from './components/Card'





const App = () => {

  const jobOpenings = [
  {
    brandLogo: "https://static.dezeen.com/uploads/2025/05/sq-google-g-logo-update_dezeen_2364_col_0-852x852.jpg",
    nameOfCompany: "Google",
    datePosted: "3 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 40,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://hipfonts.com/wp-content/uploads/2023/06/Microsoft-Logo-square-min.jpeg",
    nameOfCompany: "Microsoft",
    datePosted: "1 week ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 60,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png",
    nameOfCompany: "Amazon",
    datePosted: "5 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 50,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/meta",
    nameOfCompany: "Meta",
    datePosted: "2 weeks ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 65,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/apple",
    nameOfCompany: "Apple",
    datePosted: "10 days ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 55,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/017/396/814/non_2x/netflix-mobile-application-logo-free-png.png",
    nameOfCompany: "Netflix",
    datePosted: "3 weeks ago",
    post: "Platform Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 70,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://www.escaccelerator.in/assets/images/company/6653eaf33fe141716775667.jpg",
    nameOfCompany: "TCS",
    datePosted: "4 days ago",
    post: "Java Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 28,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/infosys",
    nameOfCompany: "Infosys",
    datePosted: "2 days ago",
    post: "QA Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: 22,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/wipro",
    nameOfCompany: "Wipro",
    datePosted: "6 days ago",
    post: "Cloud Support Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 35,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://mir-s3-cdn-cf.behance.net/projects/404/3cff50106163451.Y3JvcCwxMzUxLDEwNTYsMCwxNDc.jpg",
    nameOfCompany: "Flipkart",
    datePosted: "8 days ago",
    post: "Data Analyst",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 32,
    location: "Mumbai, India"
  }
];
console.log(jobOpenings);

  return (
    <div className='parent'>
      {jobOpenings.map(function(elem,idx){

        return <div key={idx}>
          <Card company={elem.nameOfCompany} post={elem.post} tag1={elem.tag1}  brandLogo={elem.brandLogo} pay={elem.pay} datePosted={elem.datePosted} tag2={elem.tag2}/>
        </div>
      })}
    </div>
  )
}

export default App
