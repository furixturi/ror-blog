CKEDITOR.editorConfig = function(config) {
	
	config.language = 'en';
	config.width = '700';
	config.filebrowserBrowseUrl = "/ckeditor/attachment_files";
	config.filebrowserUploadUrl = "/ckeditor/attachment_files";
	config.filebrowserImageBrowseLinkUrl = "/ckeditor/pictures";
	config.filebrowserImageBrowseUrl = "/ckeditor/pictures";
	config.filebrowserImageUploadUrl = "/ckeditor/pictures";

	config.toolbar_Pure = [

		'/', {
			name: 'basicstyles',
			items: ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat']
		}, {
			name: 'paragraph',
			items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtl']
		}, {
			name: 'links',
			items: ['Link', 'Unlink']
		}, {
			name: 'colors',
			items: ['TextColor', 'BGColor']
		}, {
			name: 'insert',
			items: ['Image'm 'Table', 'HorizontalRule', 'PageBreak']
		}

	];
	config.toolbar = 'Pure';

	return true;

};

