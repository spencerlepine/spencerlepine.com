import React from 'react';
import { graphql, Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Layout } from '@components';
import LandingSection from '@styles/landingSection';
import NotFoundPage from '@pages/404';

const PostTemplate = ({ data, location }) => {
  if (!(data && data.markdownRemark)) {
    return <NotFoundPage location={location} />;
  }

  const postData = data.markdownRemark;
  const { frontmatter, html } = postData;
  const { title, date, tags } = frontmatter;
  const postStyles = 'text-left max-w-2xl mx-auto text-primary-text';

  return (
    <Layout location={location}>
      <Helmet title={title} />

      <LandingSection>
        {/* TOOD */}
        <span>
          <span >&larr;</span>
          <Link to="/blog" className="text-primary-text">All posts</Link>
        </span>

        <header>
          <time>
            {new Date(date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <h1 className="text-title-text">{title}</h1>
          <p>
            {tags &&
              tags.length > 0 &&
              tags.map((tag, i) => (
                <Link key={i} to={`/blog/tags/${kebabCase(tag)}/`} className="m-1 text-tertiary-text">
                  #{tag}
                </Link>
              ))}
          </p>
        </header>

        <div className={postStyles} dangerouslySetInnerHTML={{ __html: html }} />
      </LandingSection>
    </Layout>
  );
};

export default PostTemplate;

PostTemplate.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
};

// export const pageQuery = graphql`
//   query($path: String!) {
//     markdownRemark(frontmatter: { slug: { eq: $path } }) {
//       html
//       frontmatter {
//         title
//         description
//         date
//         slug
//         tags
//       }
//     }
//   }
// `;

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { slug: { regex: $path } }) {
      html
      frontmatter {
        title
        description
        date
        slug
        tags
      }
    }
  }
`;