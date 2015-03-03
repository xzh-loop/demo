/*-----=====TOOLs=====-----*/
String.prototype.trim = function() {
	return this.replace(/(^\s*)|(\s*$)/g, '');
}
Object.prototype.addClass = function(className) {
	if(this.nodeType && (this.nodeType==1 || this.nodeType==9)) {
		if(!eval('/(\s|)'+className+'(\s|)/').exec(this.className)) {
			this.className = this.className + ' ' + className;
		}
		return this;
	}
}
Object.prototype.removeClass = function(className) {
	if(this.nodeType && (this.nodeType==1 || this.nodeType==9)) {
		this.className = this.className.replace(eval('/(?:\s*|)'+className+'(?:\s*|)/g') , ' ').trim();
		return this;
	}
}
Object.prototype.toggleClass = function(className) {
	if(this.nodeType && (this.nodeType==1 || this.nodeType==9)) {
		if(!eval('/(\s|)'+className+'(\s|)/').exec(this.className)) {
			this.className = this.className + ' ' + className;
		} else {
			this.className = this.className.replace(eval('/(?:\s*|)'+className+'(?:\s*|)/g') , ' ').trim();
		}
		return this;
	}
}
Object.prototype.hasClass = function(className) {
	if(this.nodeType && (this.nodeType==1 || this.nodeType==9)) {
		return eval('/(\s|)'+className+'(\s|)/').exec(this.className);
	}
}