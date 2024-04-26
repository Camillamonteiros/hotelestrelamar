document.addEventListener('DOMContentLoaded', function () {
    const cpfInput = document.getElementById('cpf');
    const cpfMask = IMask(cpfInput, {
        mask: '000.000.000-00'
    });

    function calcularCusto() {
        const precoDiaria = 100; 
        const numOfDays = document.getElementById('numdias').value;
        const totalCost = precoDiaria * numOfDays;
        document.getElementById('custototal').value = totalCost.toFixed(2);
    }

    document.getElementById('numdias').addEventListener('input', calcularCusto);

    document.getElementById('hotelForm').addEventListener('submit', function (event) {
        const checkIn = new Date(document.getElementById('data-chegada').value);
        const checkOut = new Date(document.getElementById('checkIn').value);
        if (checkOut <= checkIn) {
            alert('A data de Check-out deve ser depois da data de Check-in.');
            event.preventDefault(); 
        }
    });
});
