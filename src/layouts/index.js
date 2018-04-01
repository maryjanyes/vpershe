import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import NavBar from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import './index.css'

const TemplateWrapper = ({ children }) => (
	<div>
		<div>
			<Helmet
				title="Gatsby Default Starter"
				meta={[
					{ name: 'description', content: 'Sample' },
					{ name: 'keywords', content: 'sample, something' },
				]}
			/>
			<Header />
			<NavBar />
			<div
				style={{
					margin: '0 auto'
				}}
			>
				{children()}
			</div>
		</div>
		<Footer />
	</div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
