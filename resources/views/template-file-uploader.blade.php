<template id="laramedia-file-uploader-template" class="laramedia-modal-template">
    <div id="laramedia-file-uploader-container" class="laramedia-modal-container">
        <div id="laramedia-file-uploader-inner-container" class="laramedia-modal-inner-container">

            <!-- Modal Header -->
            <div id="laramedia-file-uploader-header" class="laramedia-modal-header">

                <!-- Title -->
                <div id="laramedia-file-uploader-header-title" class="laramedia-modal-header-title">
                    Upload Files
                </div>

                <!-- Icons -->
                <div id="laramedia-file-uploader-header-buttons" class="laramedia-modal-header-buttons">
                    <button id="laramedia-file-uploader-close-button" class="laramedia-file-uploader-bar-button laramedia-modal-bar-button" title="Close" laramedia-bar-label="close">
                        <img src="{{ asset('vendor/laramedia/images/icon-close.png') }}">
                    </button>
                </div>
            </div>

            <!-- Modal Body -->
            <div id="laramedia-file-uploader-body" class="laramedia-modal-body">

                <!-- Trigger -->
                <button type="button" style="display: none;" id="laramedia-upload-trigger-button"></button>

                <!-- Visibility -->
                @if (LaramediaConfig::showVisibility())
                    <select style="display: none;" id="laramedia-uploader-visibility-select-box" name="visibility" class="form-control">
                        <option value='private'>Private</option>
                        <option value='public'>Shared</option>
                    </select>
                @endif

                <div id="laramedia-drag-drop-area"></div>
            </div>

            <!-- Modal Footer -->
            <div id="laramedia-file-uploader-footer" class="laramedia-modal-footer">

            </div>
        </div>
    </div>
</template>
