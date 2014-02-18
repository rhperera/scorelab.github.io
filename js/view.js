$(function() {
	$( "#datepicker" ).datepicker({
		changeMonth: true,
		changeYear: true
        });
        $( "input:submit, input:button, a, button", ".demo" ).button();
        $( "a", ".demo" ).click(function() { return false; });
        $( "#1" ).dialog({
                autoOpen: true,
                width: 370,
                height: 230,
                position: [25,20],
                resizable: 'false',
                draggable: false,
                closeOnEscape: false,
                open: function(event, ui) { $(".ui-dialog-titlebar-close").hide(); }
        });
        $( "#2" ).dialog({
                autoOpen: true,
                width: 400,
                height: 510,
                position: [425,20],
                resizable: 'false',
                draggable: false,
                closeOnEscape: false,
                open: function(event, ui) { $(".ui-dialog-titlebar-close").hide(); }
        });
        $( "#3" ).dialog({
                autoOpen: true,
                width: 370,
                height: 270,
                position: [25,260],
                resizable: 'false',
                draggable: false,
                closeOnEscape: false,
                open: function(event, ui) { $(".ui-dialog-titlebar-close").hide(); }
        });
        $( "#login" ).dialog({
                autoOpen: true,
                width: 300,
                height: 170,
                position: 'center',
                resizable: 'false',
                draggable: false,
                closeOnEscape: false,
                open: function(event, ui) { $(".ui-dialog-titlebar-close").hide(); }
        });        
});
