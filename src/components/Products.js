import React,{ useContext } from 'react';

import { ProductContext } from '../contexts/ProductContext';


// Components
import Product from './Product';

const Products =() => {
	  	// consume data from the context object rather than from props
		// context hook pattern :)
		//  - import the context object
		//  - call the context hook and pass in the context object
	
	const {products, addItem} = useContext(ProductContext);

	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
