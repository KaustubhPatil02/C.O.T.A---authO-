import * as React from 'react';
import { styled } from '@mui/material/styles';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import "../CSS/slider.css";

const Slider = React.createClass({
  
  getInitialState: function() {
    return {
      slider: ["first", "second", "third", "fourth", "fifth"],
      activeIndex: 1,
      left: 0
    }
  },
  
  prevSlide: function() {
    this.setState({
      activeIndex: this.state.activeIndex - 1,
      left: this.state.left + 400 // this.props.sliderWidth not working for some reason
    })
    if (this.state.activeIndex === 1) {
      this.setState({
        activeIndex: this.state.activeIndex + this.state.slider.length - 1,
        left: this.state.left - this.props.sliderWidth * (this.state.slider.length - 1)
      })
    }
  },
  
  nextSlide: function() {
    this.setState({
      activeIndex: this.state.activeIndex + 1,
      left: this.state.left - this.props.sliderWidth
    })
    if (this.state.activeIndex === this.state.slider.length) {
      this.setState({
        activeIndex: this.state.activeIndex - this.state.slider.length + 1,
        left: 0
      })
    }
  },
  
  clickIndicator: function(e) {
    this.setState({
      activeIndex: parseInt(e.target.textContent),
      left: this.props.sliderWidth - parseInt(e.target.textContent) * this.props.sliderWidth
    })
  },
  
  render: function() {
    var style = {
      left: this.state.left,
      width: this.props.sliderWidth,
      height: this.props.sliderHeight
    };
    return (
      <div>
        <div  className="slider-wrapper">
        <ul className="slider">
        {this.state.slider.map(function(item,index) {
          return (
          <li style={style} className={index+1 === this.state.activeIndex ? 'slider-item' : 'hide'}>{item}</li>
         
          )
        },this)
        }
        </ul>
        </div>
        <div className="buttons-wrapper">
        <button className="prev-button" onClick={this.prevSlide}></button>
        <button className="next-button" onClick={this.nextSlide}></button>
        </div>
        <div className="indicators-wrapper">
          <ul className="indicators">
         {this.state.slider.map(function(item,index) {
          return (
          <li className={index+1 === this.state.activeIndex ? 'active-indicator' : ''}onClick={this.clickIndicator}>{index+1}</li>
          )
        },this)
        }
          </ul>
        </div>
      </div>
    );
  }
});

// // render
// ReactDOM.render(
//   <Slider sliderWidth="400" sliderHeight="250"/>,
//   document.getElementById("app")
// );
// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

// export default function RecipeReviewCard() {
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
    
//     <React.Fragment>
//     <h1 style={{textAlign:"center"}}>What is COTA</h1>
//     <Typography variant="body2" color="text.secondary" style={{textAlign:"center",padding:"60px",}}>
//     A house is a building in which people live, usually the people belonging to one family. She has moved to a smaller house. ... her parents' house in Warwickshire. Synonyms: home, residence, dwelling [formal, literary], building More Synonyms of house.
//         </Typography>
//     <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap",padding:"20px",gap:"20px"}}>
    
//     </div>

//     </React.Fragment>
    
//   );
// }
