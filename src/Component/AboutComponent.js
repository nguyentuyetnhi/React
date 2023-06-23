import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderLeader({ leader }) {
    return (
      <Media class="leader-media">
        <div className='row'>
        <Media left className='col-sm-3'>
          <Media object src={leader.image} alt={leader.name} />
        </Media>
        <Media body className="leaderbody col-sm-9">
          <h5>{leader.name}</h5>
          <p className="des">{leader.designation}</p>
          <p className="descript">{leader.description}</p>
        </Media>
        </div>
      </Media>
    );
  }


  const leaders = [
    {
        image: "/assets/images/alberto.png",
      name: "Peter Pan",
      designation: "Chief Epicurious Officer",
      description: "Our CEO, Peter, credits his hardworking East Asian immigrant parents who undertook the arduous\njourney to the shores of America with the intention of giving their children the best future. \nHis mother's wizardy in the kitchen whipping up the tastiest dishes with whatever is availabe\ninexpensively at the supermarket, was his first inspiration to create the fusion cuisines for which\n The Frying Pan became well known. He brings his zeal for fusion cuisines to this restaurant,\npioneering cross-cultural culinarv connections."
    },
    {
        image: "/assets/images/alberto.png",
      name: "Dhanasekaran Witherspoon",
      designation: "Chief Food Officer",
      description: "Our CFO, Danny, as he is affectionately referred to by his colleagues, comes from a long\n established family tradition in farming and produce. His experiences growing up on a farm in the\n Australian outback gave him great appreciation for varieties of food sources. As he puts it in his\n own words, Everything that runs, wins, and everything that stays, pays!"
    },
    {
        image: "/assets/images/alberto.png",
      name: "Agumbe Tang",
      designation: "Chief Taste Officer",
      description: "Blessed with the most discerning gustatory sense, Agumbe, our CFO, personally ensures thatevery dish that \n we serve meets his exacting tastes. Our chefs dread the tongue lashing that\n ensues if their dish does not meet his exacting standards. He lives by his motto, You click only if \nyou survive my lick."
    },
    {
        image: "/assets/images/alberto.png",
      name: "Alberto Somayya",
      designation: "Executive Chef",
      description: "Award winning three-star Michelin chef with wide International experience having worked closely\nwith whos-who in the culinary world, he specializes in creating mouthwatering lndo-ltalian fusion\n experiences. He says, Put together the cuisines from the two craziest cultures, and you get a\n  winning hit! Amma Mia!"
    }
  ];
   

function About(props) {

   

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us </h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <h2>Our History</h2>
                    <p>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</p>
                    <p>The restaurant traces its humble beginnings to <em>The Frying Pan</em>, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</p>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-primary text-white">Facts At a Glance</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Started</dt>
                                <dd className="col-6">3 Feb. 2013</dd>
                                <dt className="col-6">Major Stake Holder</dt>
                                <dd className="col-6">HK Fine Foods Inc.</dd>
                                <dt className="col-6">Last Year's Turnover</dt>
                                <dd className="col-6">$1,250,375</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">40</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">You better cut the pizza in four pieces because
                                    I'm not hungry enough to eat six.</p>
                                <footer className="blockquote-footer">Yogi Berra,
                                <cite title="Source Title">The Wit and Wisdom of Yogi Berra,
                                    P. Pepe, Diversion Books, 2014</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
   <div className="col-12 col-md-6">
    <h2>Corporate Leadership</h2>
   </div>
   <div class="content">
   <div className="row align-items-start">
      {leaders.map((leader, index) => (
      <div className="col-12 " key={index}>
        <RenderLeader leader={leader} />
      </div>
    ))}
  </div>
</div>
</div>

         
        </div>
    );
}

export default About;    

