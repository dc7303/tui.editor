/**
 * @fileoverview Implements Heading wysiwyg command
 * @author Sungho Kim(sungho-kim@nhnent.com) FE Development Team/NHN Ent.
 */

'use strict';

var CommandManager = require('../commandManager');

/**
 * Heading
 * Add horizontal line markdown syntax to wysiwyg Editor
 * @exports Heading
 * @augments Command
 * @augments WysiwygCommand
 */
var Heading = CommandManager.command('wysiwyg', /** @lends Heading */{
    name: 'Heading',
    /**
     *  커맨드 핸들러
     *  @param {WysiwygEditor} wwe WYsiwygEditor instance
     *  @param {Number} size size
     */
    exec: function(wwe, size) {
        var sq = wwe.getEditor();

        if (sq.getSelection().collapsed && !sq.hasFormat('TABLE')) {
            wwe.changeBlockFormatTo('H' + size);
        }

        sq.focus();
    }
});

module.exports = Heading;
