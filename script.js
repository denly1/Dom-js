document.getElementById('car-form').addEventListener('submit', function(e) {
    e.preventDefault();
    addCar();
});

function addCar() {
    const make = document.getElementById('car-name').value;
    const model = document.getElementById('car-model').value;

    if (make === '' || model === '') {
        alert('Please enter both name and model.');
        return;
    }

    const carList = document.getElementById('car-list');
    const li = document.createElement('li');
    li.textContent = `Name: ${make}, Model: ${model}`;
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        carList.removeChild(li);
    };

    li.appendChild(deleteButton);
    carList.appendChild(li);

    document.getElementById('car-name').value = '';
    document.getElementById('car-model').value = '';
}
