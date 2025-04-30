app.controller("TaskController", function ($scope, $filter, TaskService) {
    $scope.modalActive = false;
    $scope.showCompletedOnly = false;
    $scope.showIncompletedOnly = false;
    $scope.showTodayOnly = false;
    $scope.today = new Date().toLocaleDateString()
    $scope.tasks = TaskService.getTasks()
    $scope.taskInput = {
        title: "",
        date: "",
    }

    $scope.filteredTasks = function () {
        let filtered = $filter("filter")(
            $filter("filter")(
                $scope.tasks,
                $scope.showCompletedOnly ? { checked: true } : {}
            ),
            $scope.showIncompletedOnly ? { checked: false } : {}
        )
        
        if($scope.showTodayOnly){
            const start = new Date()
            start.setHours(0)
            start.setMinutes(0)
            start.setSeconds(0)
            start.setMilliseconds(0)
            const end = new Date()
            end.setHours(23)
            end.setMinutes(59)
            end.setSeconds(59)
            end.setMilliseconds(999)

            filtered = filtered.filter((task) => {
                const date = new Date(task.date)
                return(
                    date.getTime() >= start.getTime() && date.getTime() <= end.getTime()
                )
            })
        }

        return filtered
    }

    $scope.toggleModal = () => {
        $scope.modalActive = !$scope.modalActive
    }

    $scope.handleSubmitAddTask = () => {
        const title = $scope.taskInput.title
        const date = $scope.taskInput.date
        if(!title || !date) return


        TaskService.addTask(title, date)
        $scope.tasks = TaskService.getTasks()

        $scope.toggleModal()
        $scope.taskInput.title = "";
        $scope.taskInput.date = "";
    }

    $scope.toggleCheckedTask = () => {
        // localStorage.setItem("tasks", JSON.stringify($scope.tasks))
        TaskService.toggleCheck()
        $scope.tasks = TaskService.getTasks()
    }

    $scope.deleteTask = (currentTask) => {
        // $scope.tasks = $scope.tasks.filter((task) => task.id != currentTask.id)
        // localStorage.setItem("tasks", JSON.stringify($scope.tasks))
        TaskService.removeTask(currentTask.id)
        $scope.tasks = TaskService.getTasks()
    }

    $scope.validate = (error, touched) =>{
        console.log(touched)
        if(!touched)
            return {}
        const values = Object.values(error)
        if(values.length === 0)
            return {}

        const isTrue = values.reduce((acc, curr) => acc && curr, true)
        if(isTrue)
            return { "border-color": "red" }
    }

})