// tooling
import postcss from 'postcss';
import cssesc from 'cssesc';

// cssesc()

// plugin
export default postcss.plugin('postcss-escape', opts => {
	console.log('opts', opts);

	return (root) => {
		// console.log('root, result', root, result);

		root.walkRules(rule => {
			rule.selector = cssesc(rule.selector, {'isIdentifier': true});
			console.log(rule.selector);
		});

	};
});
