<template id="laramedia-file-editor-template" class="laramedia-modal-template">
    <div id="laramedia-file-editor-container" class="laramedia-modal-container">
        <div id="laramedia-file-editor-inner-container" class="laramedia-modal-inner-container">

            <!-- Modal Header -->
            <div id="laramedia-file-editor-header" class="laramedia-modal-header">

                <!-- Title -->
                <div id="laramedia-file-editor-header-title" class="laramedia-modal-header-title"></div>

                <!-- Icons -->
                <div id="laramedia-file-editor-header-buttons" class="laramedia-modal-header-buttons">
                    <button class="laramedia-file-editor-bar-button laramedia-modal-bar-button" title="Previous" laramedia-bar-label="previous">
                        <img src="{{ asset('vendor/laramedia/images/icon-back.png') }}">
                    </button>
                    <button class="laramedia-file-editor-bar-button laramedia-modal-bar-button" title="Next" laramedia-bar-label="next">
                        <img src="{{ asset('vendor/laramedia/images/icon-forward.png') }}">
                    </button>
                    <button id="laramedia-file-editor-close-button" class="laramedia-file-editor-bar-button laramedia-modal-bar-button" title="Close" laramedia-bar-label="close">
                        <img src="{{ asset('vendor/laramedia/images/icon-close.png') }}">
                    </button>
                </div>
            </div>

            <!-- Modal Body -->
            <div id="laramedia-file-editor-body" class="laramedia-modal-body">

                <!-- Left Content -->
                <div id="laramedia-file-editor-body-left" class="laramedia-modal-body-left"></div>

                <!-- Right Content -->
                <div id="laramedia-file-editor-body-right" class="laramedia-modal-body-right">
                    <div class="laramedia-file-editor-item">
                        <span class="laramedia-file-editor-item-title">File Name</span>:
                        <span editor-title="name" class="laramedia-file-editor-item-content"></span>
                    </div>
                    <div class="laramedia-file-editor-item">
                        <span class="laramedia-file-editor-item-title">File Type</span>:
                        <span editor-title="mimetype" class="laramedia-file-editor-item-content"></span>
                    </div>
                    <div class="laramedia-file-editor-item">
                        <span class="laramedia-file-editor-item-title">Uploaded On</span>:
                        <span editor-title="readable_created_at" class="laramedia-file-editor-item-content"></span>
                    </div>
                    <div class="laramedia-file-editor-item">
                        <span class="laramedia-file-editor-item-title">File Size</span>:
                        <span editor-title="readable_size" class="laramedia-file-editor-item-content"></span>
                    </div>
                    <div class="laramedia-file-editor-item" style="display: none;">
                        <span class="laramedia-file-editor-item-title">Dimensions</span>:
                        <span editor-title="readable_dimensions" class="laramedia-file-editor-item-content"></span>
                    </div>

                    <div class="laramedia-file-editor-items-separator"></div>

                    <div class="form-group">
                        <label class="font-weight-bolder">Title</label>
                        <input type="text" editor-title="title" class="form-control laramedia-disable-on-trash">
                    </div>
                    <div class="form-group" style="display: none;">
                        <label class="font-weight-bolder">Alternate Text</label>
                        <input type="text" editor-title="alt_text" class="form-control laramedia-disable-on-trash">
                    </div>
                    <div class="form-group">
                        <label class="font-weight-bolder">Caption</label>
                        <textarea class="form-control laramedia-disable-on-trash" editor-title="caption"></textarea>
                    </div>
                    <div class="form-group">
                        <label class="font-weight-bolder">Description</label>
                        <textarea editor-title="description" class="form-control laramedia-disable-on-trash"></textarea>
                    </div>
                    <div class="form-group" style="display: none;">
                        <label class="font-weight-bolder">Copyright</label>
                        <input type="text" editor-title="copyright" class="form-control laramedia-disable-on-trash">
                    </div>
                    @if (LaramediaConfig::showVisibility())
                        <div class="form-group">
                            <label class="font-weight-bolder">Ownership</label>
                            <select editor-title="visibility" class="form-control laramedia-disable-on-trash">
                                <option value="private">Private</option>
                                <option value="public">Shared</option>
                            </select>
                        </div>
                    @endif
                    <div class="form-group">
                        <label class="font-weight-bolder">SEO Title</label>
                        <input type="text" editor-title="seo_title" class="form-control laramedia-disable-on-trash">
                    </div>
                    <div class="form-group">
                        <label class="font-weight-bolder">SEO Keywords</label>
                        <input type="text" editor-title="seo_keywords" class="form-control laramedia-disable-on-trash">
                    </div>
                    <div class="form-group">
                        <label class="font-weight-bolder">SEO Description</label>
                        <textarea editor-title="seo_description" class="form-control laramedia-disable-on-trash"></textarea>
                    </div>
                    <div class="form-group">
                        <label class="font-weight-bolder">Copy Public Link</label>
                        <input type="text" editor-title="public_path" class="form-control" disabled>
                    </div>

                    <div class="laramedia-file-editor-items-separator"></div>

                    <div id="laramedia-buttons-container">
                        <a href="#" target="_blank" editor-title="preview_route" class="laramedia-file-editor-route-button btn btn-primary">
                            <img src="{{ asset('vendor/laramedia/images/icon-eye-white.png') }}"> Preview
                        </a>
                        <a href="#" target="_blank" editor-title="download_route" class="laramedia-file-editor-route-button btn btn-primary">
                            <img src="{{ asset('vendor/laramedia/images/icon-download-white.png') }}"> Download
                        </a>
                    </div>
                </div>
            </div>

            <!-- Modal Footer -->
            <div id="laramedia-file-editor-footer" class="laramedia-modal-footer">
                <button id="laramedia-file-editor-restore-button" class="laramedia-file-editor-bar-button laramedia-modal-bar-button" title="Restore" laramedia-bar-label="restore">
                    <img src="{{ asset('vendor/laramedia/images/icon-restore-white.png') }}">
                </button>
                <button id="laramedia-file-editor-delete-button" class="laramedia-file-editor-bar-button laramedia-modal-bar-button" title="Delete" laramedia-bar-label="delete">
                    <img src="{{ asset('vendor/laramedia/images/icon-delete-white.png') }}">
                </button>
                <button id="laramedia-file-editor-trash-button" class="laramedia-file-editor-bar-button laramedia-modal-bar-button" title="Trash" laramedia-bar-label="trash">
                    <img src="{{ asset('vendor/laramedia/images/icon-delete-white.png') }}">
                </button>
                <button id="laramedia-file-editor-save-button" class="laramedia-file-editor-bar-button laramedia-modal-bar-button" title="Save" laramedia-bar-label="save">
                    <img src="{{ asset('vendor/laramedia/images/icon-save-white.png') }}">
                </button>
            </div>
        </div>
    </div>
</template>
