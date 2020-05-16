'use strict';

/**
 * The pipeline stage applies custom song info data to given song info.
 * Plus, it saves the song info to browser storage.
 */

define((require) => {
	const SavedEdits = require('storage/saved-edits');

	/**
	 * Fill song info by user defined values.
	 * @param  {Object} song Song instance
	 */
	async function process(song) {
		song.flags.isCorrectedByUser = await SavedEdits.loadSongInfo(song);
	}

	return { process };
});
