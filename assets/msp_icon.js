(function() {
	jQuery("#msp_container button").on("click", function(e) {
		e.preventDefault();

		var $editor 		= jQuery("#TB_ajaxContent");
		var shortcode 	= "[multisite_posts";
		var instance 		= {
			"blog_id": $editor.find("#blog_id").val(),
			"post_no": $editor.find("#post_no").val(),
			"excerpt": $editor.find("#excerpt").val(),
			"category": $editor.find("#category").val(),
			"thumbnail": $editor.find("#thumbnail").val(),
			"custom_query": $editor.find("#custom_query").val()
		};

		for(var index in instance) {

			if(instance[index]) {

				shortcode += (["excerpt", "thumbnail"].indexOf(index) !== -1) ? " " + index + "=true" : " " + index + "=" + instance[index];

			}

		}
		shortcode += "]";

		tinyMCE.activeEditor.execCommand('mceInsertContent', false, shortcode);
		jQuery("#TB_closeWindowButton").click();
	});
})();