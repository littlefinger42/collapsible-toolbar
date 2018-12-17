(function () {
    var methods = {
      elements: {},
      init: function (settingsToolbarContainerSelector) {
          var settingsToolbarContainer = document.querySelector(settingsToolbarContainerSelector);
          console.log(settingsToolbarContainerSelector, settingsToolbarContainer);
        this.elements.settingsToolbar = settingsToolbarContainer.querySelector('.settings-toolbar');
        this.elements.actionsButton = settingsToolbarContainer.querySelector('.setting.actions');
        this.elements.behindColour = settingsToolbarContainer.querySelector('.behind-color');
        this.elements.buttons = settingsToolbarContainer.querySelectorAll('[data-setting]');
  
        this.elements.actionsButton.addEventListener('click', (function (e) {
          e.preventDefault();
          this.toggleOpen();
        }).bind(this));
  
        this.toggleExpandable(this.elements.buttons.length > 1);
      },
      toggleOpen: function () {
        this.elements.settingsToolbar.classList.toggle('open');
        this.elements.behindColour.classList.toggle('open');
        this.elements.actionsButton.classList.toggle('open');
  
        for (var i = 0; i < this.elements.buttons.length; i++) {
          this.elements.buttons[i].classList.toggle('open');
        }
      },
      toggleExpandable: function (expandable) {
        if (!expandable) {
          this.toggleOpen(!expandable);
          this.elements.behindColour.style.display = 'none';
          this.elements.actionsButton.style.display = 'none';
        }
      }
    };
  
    window.settingsToolbar = methods.init.bind(methods);
  }());
  