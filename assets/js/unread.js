document.addEventListener("DOMContentLoaded", function() {
    // Get all elements with the class name "single-notification"
    var notifications = document.querySelectorAll(".unread");
    // Get the span element where the count of unread notifications will be displayed
    var unreadCountSpan = document.getElementById("unreadNotification");
    
    // Initialize the count of unread notifications to the total number of notifications with the "unread" class
    var unreadCount = notifications.length;

    // Update the text content of the unread count span
    unreadCountSpan.textContent = unreadCount;

    // Loop through each notification element
    notifications.forEach(function(notification) {
      // Add click event listener to each notification
      notification.addEventListener("click", function() {
        // Check if the notification has the "unread" class
        if (notification.classList.contains("unread")) {
          // Remove the "unread" class from the clicked notification
          notification.classList.remove("unread");
          // Decrement the count of unread notifications
          unreadCount--;
          // Update the text content of the unread count span
          unreadCountSpan.textContent = unreadCount;
        }
      });
    });

      // Get the paragraph element for marking all notifications as read
  var markAllAsRead = document.querySelector(".header p");

  // Add click event listener to the "Mark all as read" paragraph
  markAllAsRead.addEventListener("click", function() {
    // Remove the "unread" class from all notifications
    notifications.forEach(function(notification) {
      notification.classList.remove("unread");
    });
    // Set the unread count to 0
    unreadCount = 0;
    // Update the text content of the unread count span
    unreadCountSpan.textContent = unreadCount;
  });

  });


