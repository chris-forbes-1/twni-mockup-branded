// JavaScript source code

function validateLimit(obj, divID, maxchar, caller) {
    objDiv = get_object(divID);
    if (this.id) obj = this;
    var remaningChar = maxchar - trimEnter(obj.value).length;

    if (objDiv.id) {
        objDiv.innerHTML = remaningChar + " characters remaining";
    }
    if (remaningChar < 10) {
        if (objDiv.id) {
            objDiv.style.color = '#ff0000';
        }
    }
    //else {
    //    if (objDiv.id) {
    //        objDiv.style.color = '#000000';
    //    }
    //}
    if (remaningChar <= 0) {
        obj.value = obj.value.substring(maxchar, 0);
        if (objDiv.id) {
            objDiv.innerHTML = "0 characters left";
        }
        if (caller != 'focus') {
            alert('0 characters left');
        }
        return false;
    }
    else { return true; }
}

function lostfocus(obj, divID, maxchar) {
    objDiv = get_object(divID);
    if (this.id) obj = this;
    if (objDiv.id) {
        objDiv.innerHTML = maxchar + " characters maximum";
    }
}
function get_object(id) {
    var object = null;
    if (document.layers) {
        object = document.layers[id];
    } else if (document.all) {
        object = document.all[id];
    } else if (document.getElementById) {
        object = document.getElementById(id);
    }
    return object;
}

function trimEnter(dataStr) {
    return dataStr.replace(/(\r\n|\r|\n)/g, "");
}

function ddlProgDisclSelect() {
    // Hide the optional questions
    var list = document.getElementById('ddlProgDiscl');
    var chosenItemText = list.value;
    if (chosenItemText == 'Other') {
        document.getElementById('txtProgDisclDDDiv').style.display = 'inline';
    }
    else {
        document.getElementById('txtProgDisclDDDiv').style.display = 'none';
        document.getElementById('txtProgDisclDD').value = '';
    }
}

function rbProgDisclSelect() {
    if (document.getElementById('rbYes').checked) {
        document.getElementById('txtProgDisclRBDiv').style.display = 'block';
    }
    else {
        document.getElementById('txtProgDisclRBDiv').style.display = 'none';
        document.getElementById('txtProgDisclRB').value = '';
    }
}

$(document).ready(function () {

    // Turn off jQuery animation
    //jQuery.fx.off = true;

    // Use GOV.UK selection-buttons.js to set selected
    // and focused states for block labels
    var $blockLabels = $(".block-label input[type='radio'], .block-label input[type='checkbox']");
    new GOVUK.SelectionButtons($blockLabels);

    var toggleContent = new ShowHideContent();
    toggleContent.showHideRadioToggledContent();

    $('.js-hidden').hide();

});

(function () {
    "use strict";
    var root = this,
        $ = root.jQuery;

    if (typeof GOVUK === 'undefined') { root.GOVUK = {}; }

    var SelectionButtons = function (elmsOrSelector, opts) {
        var $elms;

        this.selectedClass = 'selected';
        this.focusedClass = 'focused';
        if (opts !== undefined) {
            $.each(opts, function (optionName, optionObj) {
                this[optionName] = optionObj;
            }.bind(this));
        }
        if (typeof elmsOrSelector === 'string') {
            $elms = $(elmsOrSelector);
            this.selector = elmsOrSelector;
            this.setInitialState($(this.selector));
        } else {
            this.$elms = elmsOrSelector;
            this.setInitialState(this.$elms);
        }
        this.addEvents();
    };
    SelectionButtons.prototype.addEvents = function () {
        if (typeof this.$elms !== 'undefined') {
            this.addElementLevelEvents();
        } else {
            this.addDocumentLevelEvents();
        }
    };
    SelectionButtons.prototype.setInitialState = function ($elms) {
        $elms.each(function (idx, elm) {
            var $elm = $(elm);

            if ($elm.is(':checked')) {
                this.markSelected($elm);
            }
        }.bind(this));
    };
    SelectionButtons.prototype.markFocused = function ($elm, state) {
        if (state === 'focused') {
            $elm.parent('label').addClass(this.focusedClass);
        } else {
            $elm.parent('label').removeClass(this.focusedClass);
        }
    };
    SelectionButtons.prototype.markSelected = function ($elm) {
        var radioName;

        if ($elm.attr('type') === 'radio') {
            radioName = $elm.attr('name');
            $($elm[0].form).find('input[name="' + radioName + '"]')
              .parent('label')
              .removeClass(this.selectedClass);
            $elm.parent('label').addClass(this.selectedClass);
        } else { // checkbox
            if ($elm.is(':checked')) {
                $elm.parent('label').addClass(this.selectedClass);
            } else {
                $elm.parent('label').removeClass(this.selectedClass);
            }
        }
    };
    SelectionButtons.prototype.addElementLevelEvents = function () {
        this.clickHandler = this.getClickHandler();
        this.focusHandler = this.getFocusHandler({ 'level': 'element' });

        this.$elms
          .on('click', this.clickHandler)
          .on('focus blur', this.focusHandler);
    };
    SelectionButtons.prototype.addDocumentLevelEvents = function () {
        this.clickHandler = this.getClickHandler();
        this.focusHandler = this.getFocusHandler({ 'level': 'document' });

        $(document)
          .on('click', this.selector, this.clickHandler)
          .on('focus blur', this.selector, this.focusHandler);
    };
    SelectionButtons.prototype.getClickHandler = function () {
        return function (e) {
            this.markSelected($(e.target));
        }.bind(this);
    };
    SelectionButtons.prototype.getFocusHandler = function (opts) {
        var focusEvent = (opts.level === 'document') ? 'focusin' : 'focus';

        return function (e) {
            var state = (e.type === focusEvent) ? 'focused' : 'blurred';

            this.markFocused($(e.target), state);
        }.bind(this);
    };
    SelectionButtons.prototype.destroy = function () {
        if (typeof this.selector !== 'undefined') {
            $(document)
              .off('click', this.selector, this.clickHandler)
              .off('focus blur', this.selector, this.focusHandler);
        } else {
            this.$elms
              .off('click', this.clickHandler)
              .off('focus blur', this.focusHandler);
        }
    };

    root.GOVUK.SelectionButtons = SelectionButtons;
}).call(this);

function ShowHideContent() {
    var self = this;
    self.showHideRadioToggledContent = function () {
        $(".block-label input[type='radio']").each(function () {

            var $radio = $(this);
            var $radioGroupName = $radio.attr('name');
            var $radioLabel = $radio.parent('label');

            var dataTarget = $radioLabel.attr('data-target');

            // Add ARIA attributes

            // If the data-target attribute is defined
            if (dataTarget) {

                // Set aria-controls
                $radio.attr('aria-controls', dataTarget);

                $radio.on('click', function () {

                    // Select radio buttons in the same group
                    $radio.closest('form').find(".block-label input[name=" + $radioGroupName + "]").each(function () {
                        var $this = $(this);

                        var groupDataTarget = $this.parent('label').attr('data-target');
                        var $groupDataTarget = $('#' + groupDataTarget);

                        // Hide toggled content
                        $groupDataTarget.hide();
                        // Set aria-expanded and aria-hidden for hidden content
                        $this.attr('aria-expanded', 'false');
                        $groupDataTarget.attr('aria-hidden', 'true');
                    });

                    var $dataTarget = $('#' + dataTarget);
                    $dataTarget.show();
                    // Set aria-expanded and aria-hidden for clicked radio
                    $radio.attr('aria-expanded', 'true');
                    $dataTarget.attr('aria-hidden', 'false');

                });

            } else {
                // If the data-target attribute is undefined for a radio button,
                // hide visible data-target content for radio buttons in the same group

                $radio.on('click', function () {

                    // Select radio buttons in the same group
                    $(".block-label input[name=" + $radioGroupName + "]").each(function () {

                        var groupDataTarget = $(this).parent('label').attr('data-target');
                        var $groupDataTarget = $('#' + groupDataTarget);

                        // Hide toggled content
                        $groupDataTarget.hide();
                        // Set aria-expanded and aria-hidden for hidden content
                        $(this).attr('aria-expanded', 'false');
                        $groupDataTarget.attr('aria-hidden', 'true');
                    });

                });
            }

        });
    }
    self.showHideCheckboxToggledContent = function () {

        $(".block-label input[type='checkbox']").each(function () {

            var $checkbox = $(this);
            var $checkboxLabel = $(this).parent();

            var $dataTarget = $checkboxLabel.attr('data-target');

            // Add ARIA attributes

            // If the data-target attribute is defined
            if (typeof $dataTarget !== 'undefined' && $dataTarget !== false) {

                // Set aria-controls
                $checkbox.attr('aria-controls', $dataTarget);

                // Set aria-expanded and aria-hidden
                $checkbox.attr('aria-expanded', 'false');
                $('#' + $dataTarget).attr('aria-hidden', 'true');

                // For checkboxes revealing hidden content
                $checkbox.on('click', function () {

                    var state = $(this).attr('aria-expanded') === 'false' ? true : false;

                    // Toggle hidden content
                    $('#' + $dataTarget).toggle();

                    // Update aria-expanded and aria-hidden attributes
                    $(this).attr('aria-expanded', state);
                    $('#' + $dataTarget).attr('aria-hidden', !state);

                });
            }

        });
    }
}
