const About = () => {
  return (
    <div>
      <h1 className="pageTitle">Welcome to Food Finder!</h1>
      <hr color="#cece8f"/>
      <div id="appIntro">
          <p>This application can be used to find local restaurant options available within your time schedule needs. You can use the Food Finder to explore restaurants in your area open when you need them. </p> 
          <p>Looking for dinner after 10pm? Not a problem! Set the Food Finder time to 10pm and you will get a list of restaurants in your area that are open for business at 10pm.</p>
          <p className="metaInfo">Food Finder was created by Nicole Schwartz in March 2022. It utilizes restaurant data from the Yelp Fusion API.</p>
      </div>
    </div>
  )
}
export default About;
