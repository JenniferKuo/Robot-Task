// Initialize Firebase
		var config = {
		apiKey: "AIzaSyCkoFySpzgJ8ty_pyftHu55nTs8cifzDj4",
		authDomain: "robot-databse.firebaseapp.com",
		databaseURL: "https://robot-databse.firebaseio.com",
		projectId: "robot-databse",
		storageBucket: "robot-databse.appspot.com",
		messagingSenderId: "584181834178"
		};
		firebase.initializeApp(config);
		var database = firebase.database();

		// Builds the HTML Table out of myList.
		function buildHtmlTable(selector) {
			$(selector).html('');
		  var columns = addAllColumnHeaders(myList, selector);

		  for (var i = 0; i < myList.length; i++) {
		    var row$ = $('<tr/>');
		    for (var colIndex = 0; colIndex < columns.length; colIndex++) {
		      var cellValue = myList[i][columns[colIndex]];
		      // if (cellValue == null) cellValue = "";
		      row$.append($('<td/>').html(cellValue));
		    }
		    $(selector).append(row$);
		  }
		}

		function addAllColumnHeaders(myList, selector) {
		  var columnSet = [];
		  var headerTr$ = $('<tr/>');

		  for (var i = 0; i < myList.length; i++) {
		    var rowHash = myList[i];
		    for (var key in rowHash) {
		      if ($.inArray(key, columnSet) == -1) {
		        columnSet.push(key);
		        headerTr$.append($('<th/>').html(key));
		      }
		    }
		  }
		  $(selector).append(headerTr$);

		  return columnSet;
		}