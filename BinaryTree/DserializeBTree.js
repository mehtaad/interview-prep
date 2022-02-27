var tt= function(x) {
	var root={};
	x=x.split('');
	constructT(x,root,0);
	console.log(root);
}
var constructT=function(x, root={}) {
	if(x.length===0) return; 
	let val=x.shift();
	if(val===')') return;
	if(val ==='(') {
		root.val= x.shift();
	}
	if(x[0]===')'){
		x.shift();
		return;
	}
	if(x[0]==='('){
		root.left={};
		constructT(x,root.left)
	}
	
	if(x[0]==='('){
		root.right={};
		constructT(x,root.right)
	}
	if(x[0]===')'){
		x.shift();
		return;
	}
	return root;
}
var x1="(a(b(c(d)(e)))";
x1 = "(a(b(c(d)(e))(f(g)(h)))(i(j)(k)))";
tt(x1);
