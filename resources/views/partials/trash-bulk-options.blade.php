<div style="display: none;" id="laramedia-trash-bulk-options-container" class="laramedia-action-select-box-container">
    <select id="laramedia-trash-bulk-select-box" class="laramedia-bulk-select-box laramedia-action-select-box">
        <option value="">Bulk Option</option>
        @if (LaramediaConfig::can('restore_bulk'))
            <option value="restore">Restore</option>
        @endif
        @if (LaramediaConfig::can('delete_bulk'))
            <option value="delete">Delete Permanently</option>
        @endif
    </select>
</div>
