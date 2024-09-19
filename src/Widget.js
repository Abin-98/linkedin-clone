import React from "react";
import "./Widget.css";
import InfoIcon from "@mui/icons-material/Info";

const Widget = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2><br/>
        <InfoIcon />
      </div>
      <h3>Top stories</h3>
      {newsArticle('Top funding news to know','5h ago • 1,536 readers')}
      {newsArticle('Building a career in social impact','5h ago • 509 readers')}
      {newsArticle('Redcliffe Labs raises $42 million','1d ago • 20,040 readers')}
      {newsArticle('Where Indians are moving for work','1d ago • 16,708 readers')}
      {newsArticle('Top industry for B-school talent','2d ago • 3,864 readers')}
    </div>
  );
};

export default Widget;
