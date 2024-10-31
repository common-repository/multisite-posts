(function() {
	tinymce.create('tinymce.plugins.msp', {
		init : function(ed, url) {
			ed.addButton("shortcode", {
				cmd : "shortcode",
				title : "Shortcode",
				image : url + "/msp_icon.png"
			});
		},
		createControl : function(n, cm) {
			return null;
		},
		getInfo : function() {
			return {
				author : 'Angela',
				version : '1.0',
				infourl : 'http://angelawang.me/',
				longname : 'Multisite Posts Button',
				authorurl : 'http://angelawang.me/',
			};
		}
	});

	tinymce.PluginManager.add( 'msp', tinymce.plugins.msp );
})();