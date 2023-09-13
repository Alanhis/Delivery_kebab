const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({ user }) {
  return (
    <Layout user={user} title="Home page">
      <h1>Home</h1>
    </Layout>
  );
};
