"use strict";

// using a function contructor form to create an object
function TaskAtHandApp()
{
	var version = "v3.2",
		appStorage = new AppStorage("taskAtHand");
		
	// creating a private function
	function setStatus(message)
	{
		
		$("#app>footer").text(message);
	}

	// creating a public function
	this.start = function()
	{

		$("#theme").change(onChangeTheme);//ChANGES Theme
		
		$("#new-task-name").keypress(function(e){
			if (e.which == 13) //Enter Key
			{
				addTask();
				return false;
			}
		})
		.focus();
		
		$("#app>header").append(version);
		loadTheme();//Load Theme
		loadTaskList();
		setStatus("ready");
	};
	
	
	function addTask()
	{
		var taskName = $("#new-task-name").val();
		if (taskName)
		{
		addTaskElement(taskName);
		// Reset the text field
		$("#new-task-name").val("").focus();
		}
	}
	function addTaskElement(taskName)
	{
		
	var $task = $("#task-template .task").clone();
	$("span.task-name", $task) .text(taskName);
		
		$("#task-list").append($task);
		
		$("button.delete", $task).click(function() {
			removeTask($task);
		});
		
		$("button.move-up", $task).click(function() {
			moveTask($task, true);
		});
		
		$("button.move-down", $task).click(function() {
			moveTask($task, false);
		});
		
		$("span.task-name", $task).click(function() {
			onEditTaskName ($(this));	
		});
		
		$("input.task-name", $task).change(function() {
			onChangeTaskName($(this));
		})
		.blur(function() {
			$(this).hide().siblings("span.task-name").show();
		});
		saveTaskList();
	
	$task.click(function() {onSelectTask($task); });//CHECK
	
	function onSelectTask()
	{
		if ($task)
		{
			$task.siblings(".selected").removeClass("selected");
			$task.addClass("selected");
		}
	}
	
	//#####################################
	$("button.toggle-details", $task).click(function() {
		toggleDetails($task);
	});
	
	function toggleDetails($task)
	{
		$(".details", $task).slideToggle();
		$("button.toggle-details", $task).toggleClass("expanded");
	}
	
	}//End AddTaskElement

	function removeTask($task)
	{
		$task.remove();
		saveTaskList();
	}
	function moveTask($task, moveUp)
	{
			if (moveUp)
			{
				$task.insertBefore($task.prev());
			}
			else
			{
				$task.insertAfter($task.next());
			}
			saveTaskList();
	}
	
	function onEditTaskName($span)
	{
		$span.hide()
			.siblings("input.task-name")
			.val($span.text())
			.show()
			.focus();
	}

	function onChangeTaskName($input)
	{
		$input.hide();
		var $span = $input.siblings("span.task-name");
		if ($input.val())
		{
			$span.text($input.val());
		}
		$span.show();
		saveTaskList();
	}
	
	function saveTaskList()
	{
			var tasks = [];
			$("#task-list .task span.task-name").each(function() {
				tasks.push($(this).text())
			});
			appStorage.setValue("taskList", tasks);
	}
	
	function loadTaskList()
	{
			var tasks = appStorage.getValue("taskList");
			if (tasks)
			{
					for (var i in tasks)
					{
							addTaskElement(tasks[i]);
					}
			}
	}
	
	/*##################*/
	
	function onChangeTheme()
	{
		var theme = $("#theme>option").filter(":selected").val();
		setTheme(theme);
		appStorage.setValue("theme", theme);
	}
	
	function setTheme(theme)
	{
		$("#theme-style").attr("href", "themes/" + theme +".css");
	}
	
	function loadTheme()
	{
		var theme = appStorage.getValue("theme");
		if (theme)
		{
			setTheme(theme);
			$("#theme>option[value=" + theme + "]")
				.attr("selected","selected");
		}
	}

	
} // end MyApp

/* 	JQuery's shorthand for the document ready event handler
		could be written: $(document).ready(handler);

		When this page loads, we'll create a global variable
		named "app" by attaching it to the "window" object
		(part of the BOM - Browser Object Model)
*/
$(function() {
	window.app = new TaskAtHandApp();
	window.app.start();
});


