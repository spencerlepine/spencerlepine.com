import React from 'react';
import { Link, graphql } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Layout } from '@components';

const TagTemplate = ({ pageContext, data, location }) => {
  const { tag } = pageContext;
  const { edges } = data.allMarkdownRemark;

  return (
    <Layout location={location}>
      <Helmet title={`Tagged: #${tag}`} />

      <main >
        <span >
          <span >&larr;</span>
          <Link to="/blog">All posts</Link>
        </span>

        <h1>
          <span >#{tag}</span>
          <span>-</span>
          <span >
            <Link to="/blog/tags">View all tags</Link>
          </span>
        </h1>

        <ul >
          {edges.map(({ node }) => {
            const { title, slug, date, tags } = node.frontmatter;
            return (
              <li key={slug} >
                <h2>
                  <Link to={slug} >{title}</Link>
                </h2>
                <p >
                  <time>
                    {new Date(date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  <span>&nbsp;&mdash;&nbsp;</span>
                  {tags &&
                    tags.length > 0 &&
                    tags.map((tag, i) => (
                      <Link key={i} to={`/blog/tags/${kebabCase(tag)}/`} >
                        #{tag}
                      </Link>
                    ))}
                </p>
              </li>
            );
          })}
        </ul>
      </main>
    </Layout>
  );
};

export default TagTemplate;

TagTemplate.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired,
      ),
    }),
  }),
  location: PropTypes.object,
};

export const pageQuery = graphql`
  query($tag: String!) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            description
            date
            slug
            tags
          }
        }
      }
    }
  }
`;
