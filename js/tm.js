document.addEventListener("DOMContentLoaded", function () {
    const completeButtons = document.querySelectorAll(".complete-button");
    const cancelButtons = document.querySelectorAll(".cancel-button");
    const completedSection = document.querySelector(".task-section:nth-child(4)");

    // Mark Task as Completed
    completeButtons.forEach(button => {
        button.addEventListener("click", function () {
            const taskItem = this.parentElement;
            this.remove(); // Remove the "Complete" button

            // Move task to "Completed Tasks" section
            completedSection.appendChild(taskItem);
        });
    });

    // Cancel Task
    cancelButtons.forEach(button => {
        button.addEventListener("click", function () {
            const taskItem = this.parentElement;
            taskItem.remove(); // Remove task from UI
        });
    });
});
