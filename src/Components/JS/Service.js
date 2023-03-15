import  React,{useState} from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
// import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
// import ShareIcon from '@mui/icons-material/Share';
import data from './data'
import {Link} from 'react-router-dom'
import '../CSS/Service.css'

export default function RecipeReviewCard() {

  const [set, reset] = useState('');

  return (
    <div style={{minHeight:"160vh"}} id="Service">
      
        <h1 data-aos="flip-left" style={{margin:"0px",textAlign:"center",padding:"10px",}}>OUR SERVICES</h1>

        <form className="d-flex" style={{ width: '300px', margin: 'auto', marginBottom: "20px" }}>
          <input className="form-control me-2" style={{ width: '300px' }}  data-aos="fade-right" value={set} onChange={(e) => reset(e.target.value)} type="search" placeholder="Search" aria-label="Search" />
        </form>
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap",margin:"20px"}}>
    { 

      data.filter(function (val) {
              if (set === "") {
                return val;
              } else if (val.name.toLowerCase().includes(set.toLowerCase())) {
                return val;
              }
            })
        .map((item)=>{
            return(
              <React.Fragment>
                <Card sx={{ maxWidth: 345,margin:'25px' }} color="white" data-aos={item.class} id="card">
      <CardHeader
        title={item.name}
        subheader="Service Avaliable" color="white"
      />
      <Link to={"View"+item.name}>
      <CardMedia
        component="img"
        height="194"
        image={item.Image}
        alt="Paella dish"
        
      />
      </Link>
      <CardContent>
        <Typography variant="body" color="white" >
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {/* <IconButton aria-label="add to favorites">
          <Link to={"View/"+item.name} style={{listStyle:"none",color:"white",textDecoration:"none",background:"#007acc",borderRadius:"5%"}}>Read More</Link>
        </IconButton> */}
        {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
      </CardActions>
    </Card>
      </React.Fragment>
            )
        })
    }
    </div>
    </div>
  );
}

