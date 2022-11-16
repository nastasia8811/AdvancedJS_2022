export class Modal {

    constructor() {
        this._modalElement = document.createElement('div');
        this._backgroundContainer = document.createElement('div');
        this._mainContainer = document.createElement('div');
        this._contentContainer = document.createElement('div');
        this._buttonContainer = document.createElement('div');
        this._closeButton = document.createElement('div');
    }

    closeModal() {
        this._modalElement.remove();
    }

    createElements() {
        this._closeButton.classList.add('modal__close');
        this._closeButton.addEventListener('click', this.closeModal.bind(this));

        this._backgroundContainer.classList.add('modal__background');
        this._backgroundContainer.addEventListener('click', this.closeModal.bind(this));

        this._contentContainer.classList.add('modal__content-wrapper');
        this._buttonContainer.classList.add('modal__button-wrapper');

        this._mainContainer.classList.add('modal__container');
        this._mainContainer.append(this._contentContainer);
        this._mainContainer.append(this._buttonContainer);
        this._mainContainer.append(this._closeButton);

        this._modalElement.classList.add('modal__window');
        this._modalElement.append(this._backgroundContainer);
        this._modalElement.append(this._mainContainer);

    }

    render(container = document.body) {
        this.createElements();
        container.append(this._modalElement);
    }
}