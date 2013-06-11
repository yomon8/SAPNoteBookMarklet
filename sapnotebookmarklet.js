(function(){
	var noteurl = '';
	function init() {
		$('<div>').css({
			position: 'fixed',
			left: 0,
			top: 0,
			width: '100%',
			height: '100%',
			zIndex: 1000,
			backgroundColor: 'rgba(0,0,255,0.4)',
			color: '#ffffff',
			fontSize: 30,
			textAlign: 'center',
			paddingTop: '15em'
		}).attr('id', '___overlay').text('Please input SAP note number...').appendTo('body');
		note_num = window.prompt('Please input SAP note number...');
		if(!note_num || !/^[0-9]{1,10}$/.test(note_num)) {
			alert('Please input valid number');
			$('#___overlay').remove();
			return false;
		}else {
			noteurl = 'http://service.sap.com/~form/handler?_APP=01100107900000000342&_EVENT=REDIR&_NNUM='+note_num;
		}
		window.open(noteurl);
		$('#___overlay').remove();
		return;
	} 
	if(typeof $ !== 'function') {
		var d=document;
		var s=d.createElement('script');
		s.src='//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js';
		s.onload=init;
		d.body.appendChild(s);
	} else {
		init();
	}
})();