import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { ProjectCard } from '@components';

const MAX_PROJECTS_SHOWN = 2;

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      projects: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/portfolio/" }
          frontmatter: { showInProjects: { ne: false } }
        }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              tech
              github
              external
              description
              thumbnail {
                childImageSharp {
                  fluid(quality: 100, maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              slug
              isFeatured
            }
          }
        }
      }
    }
  `);

  const projectsToShow = data.projects.edges.filter(({ node }) => node.frontmatter.isFeatured && node.frontmatter.tech).slice(0, MAX_PROJECTS_SHOWN);

  return (
    <section >
      <div>
        <div>
          <div>
            <h2 >
              Portfolio

              <Link >
                <p >veiw all</p>
              </Link>
            </h2>

          </div>

          <ul >
            <>
              {projectsToShow &&
                projectsToShow.map(({ node }, i) => (
                  <>
                    {node.frontmatter.tech && (
                      <li key={i} >
                        <ProjectCard node={node} listIndex={i} />
                      </li>
                    )}
                  </>
                ))}
            </>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
