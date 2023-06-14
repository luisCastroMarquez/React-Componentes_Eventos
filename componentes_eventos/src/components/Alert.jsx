export default function Alert({ message, onClose, type }) {
    const getColorClass = () => {
        if (type === 'success') {
            return 'alert-success';
        }  else if (type === 'danger') {
            return 'alert-danger';
        }  else {
            return '';
        }
    };

    return (
        <div className={`alert ${getColorClass()}`}>
            <p>{message}</p>
            <button onClick={onClose}>Cerrar</button>
        </div>
    );
}