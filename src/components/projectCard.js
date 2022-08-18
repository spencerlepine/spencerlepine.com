/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'gatsby';
import { Icon } from '@components/icons';

const extractImages = node => {
  try {
    /*
    childImageSharp {
      gatsbyImageData(width: 700, formats: [AUTO, PNG])
    }
    */
    //
    const thumbnailData = node.frontmatter.thumbnail;
    const image = thumbnailData.childImageSharp.fluid.src;
    return image;
  } catch {
    return 'http://cmsi-id.com/assets/product/15032016/pt-cahayatiara-mustika-scientific-indonesia_wrv9c_1073.png';
  }
};

const ProjectCard = ({ node, listIndex, customTitleData }) => {
  const { frontmatter } = node;
  const image = extractImages(node);

  const { github, external, title, tech, description, slug } = frontmatter;
  const leftColumn = (listIndex + 1) % 2 === 0 ? 'image' : 'details';
  const imageAlign = (listIndex + 1) % 2 === 0 ? 'left' : 'right';
  const customTitle = (customTitleData && customTitleData.title) ? customTitleData.title : 'Featured Project';
  const customTitleStyle = (customTitleData && customTitleData.styleString) ? customTitleData.styleString : 'text-sm text-orange-400';

  const ImageColumn = () => (
    <div className="projectImage align-end opacity-50 relative overflow-y-clip" style={{ overflowY: 'clip', zIndex: 0 }}>
      <a href={external || github} aria-label="Project Link" className="inline-block p-1">
        <img className={`md:max-w-sm sm:max-w-xs xs:max-w-xs z-0 absolute ${imageAlign}-10`} src={image} style={{ zIndex: 0 }} alt="Project Screenshot"></img>
      </a>
    </div >
  );

  const ProjectDetails = () => {
    const alignment = leftColumn === 'image' ? 'text-right' : '';

    return (
      <div className={`projectDetails max-w-sm ${alignment} sm:text-left xs:text-left lg:${alignment} md:${alignment}`} style={{ zIndex: 99 }}>
        <header className="p-1">
          <div className="grid">
            <h6 className={customTitleStyle}>{customTitle}</h6>

            <Link to={slug} className="" target="_blank" rel="noreferrer">
              <h3 className="text-xl font-bold">{title}</h3>
            </Link>
          </div>
        </header>

        <div className="projectDesc p-3 bg-navy-dark z-10 rounded-sm border-2 border-navy-dark">
          <p className="text-sm text-gray-200">{description}</p>
        </div>

        <div className={`projectTechnologies max-w-sm ${alignment ? 'ml-auto' : ''}`} style={{ maxWidth: '70%' }}>
          {tech.map((tech, i) => (
            <p
              className="whitespace-nowrap w-min block sm:inline-block xs:inline-block m-1 text-navy-medium p-1 text-sm"
              key={i}>
              {tech}
            </p>
          ))}
        </div>

        <div className="rounded text-navy-dark p-2">
          {github && (
            <a href={github} aria-label="GitHub Link" className="inline-block p-1">
              <Icon name="GitHub" customClass="" />
            </a>
          )}
          {external && (
            <a href={external} aria-label="External Link" className="external inline-block p-1">
              <Icon name="External" customClass="" />
            </a>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      {leftColumn === 'details' ? <ProjectDetails /> : <ImageColumn />}
      {leftColumn === 'details' ? <ImageColumn /> : <ProjectDetails />}
    </div >
  );
};

export default ProjectCard;