<template id="laramedia-file-editor">
    <div id="laramedia-file-editor-wrapper" class="laramedia-modal-wrapper">
        <div id="laramedia-file-editor-container" class="laramedia-modal-container">

            {{-- Header --}}
            <div id="laramedia-file-editor-header" class="laramedia-modal-header">
                <button id="laramedia-file-editor-previous" class="laramedia-modal-button">
                    <<
                </button>
                <button id="laramedia-file-editor-next" class="laramedia-modal-button">
                    >>
                </button>
                <button id="laramedia-file-editor-close" class="laramedia-modal-button">
                    X
                </button>
            </div>

            {{-- Body --}}
            <div id="laramedia-file-editor-body" class="laramedia-modal-body">

                {{-- File Preview --}}
                <div id="laramedia-file-editor-preview-container">
                    <div id="laramedia-file-editor-preview-image-container" class="laramedia-file-editor-item-preview-container">
                    
                    </div>
                    <div id="laramedia-file-editor-preview-icon-container" class="laramedia-file-editor-item-preview-container">
                        @include('laramedia::icons.file', ['width' => 72, 'height' => 72])
                    </div>
                </div>

                {{-- File Contents --}}
                <div id="laramedia-file-editor-contents">
                    {{-- File Name --}}
                    <div class="laramedia-file-editor-display-content-form-group">
                        <span class="laramedia-file-editor-display-content-title">Name:</span>
                        <span id="laramedia-file-editor-name" class="laramedia-file-editor-display-content-data"></span>
                    </div>

                    <!-- File Type -->
                    <div class="laramedia-file-editor-display-content-form-group">
                        <span class="laramedia-file-editor-display-content-title">File Type:</span>
                        <span id="laramedia-file-editor-file-type" class="laramedia-file-editor-display-content-data"></span>
                    </div>

                    <!-- Uploaded On -->
                    <div class="laramedia-file-editor-display-content-form-group">
                        <span class="laramedia-file-editor-display-content-title">Uploaded On:</span>
                        <span id="laramedia-file-editor-uploaded-on" class="laramedia-file-editor-display-content-data"></span>
                    </div>

                    <!-- File Size -->
                    <div class="laramedia-file-editor-display-content-form-group">
                        <span class="laramedia-file-editor-display-content-title">Size:</span>
                        <span id="laramedia-file-editor-filesize" class="laramedia-file-editor-display-content-data"></span>
                    </div>

                    <!-- Dimensions -->
                    <div class="laramedia-file-editor-display-content-form-group laramedia-file-editor-image-form-group laramedia-hidden">
                        <span class="laramedia-file-editor-display-content-title">Dimensions:</span>
                        <span id="laramedia-file-editor-dimensions" class="laramedia-file-editor-display-content-data"></span>
                    </div>

                    <div id="laramedia-file-editor-contents-separator"></div>

                    <!-- Title -->
                    <div class="laramedia-file-editor-edit-content-form-group">
                        <label for="laramedia-file-editor-title" class="laramedia-file-editor-edit-content-label laramedia-file-editor-edit-content-title">Title</label>
                        <input type="text" id="laramedia-file-editor-title" class="laramedia-file-editor-form-control laramedia-file-editor-edit-content-data">
                    </div>

                    <!-- Alt Text -->
                    <div class="laramedia-file-editor-edit-content-form-group laramedia-file-editor-image-form-group laramedia-hidden">
                        <label for="laramedia-file-editor-alt-text" class="laramedia-file-editor-edit-content-label laramedia-file-editor-edit-content-title">Alt Text</label>
                        <input type="text" id="laramedia-file-editor-alt-text" class="laramedia-file-editor-form-control laramedia-file-editor-edit-content-data">
                    </div>

                    <!-- Caption -->
                    <div class="laramedia-file-editor-edit-content-form-group laramedia-file-editor-image-form-group laramedia-hidden">
                        <label for="laramedia-file-editor-caption" class="laramedia-file-editor-edit-content-label laramedia-file-editor-edit-content-title">Caption</label>
                        <input type="text" id="laramedia-file-editor-caption" class="laramedia-file-editor-form-control laramedia-file-editor-edit-content-data">
                    </div>

                    <!-- Description -->
                    <div class="laramedia-file-editor-edit-content-form-group laramedia-file-editor-image-form-group laramedia-hidden">
                        <label for="laramedia-file-editor-description" class="laramedia-file-editor-edit-content-label laramedia-file-editor-edit-content-title">Description</label>
                        <textarea id="laramedia-file-editor-description" class="laramedia-file-editor-form-control laramedia-file-editor-edit-content-data"></textarea>
                    </div>

                    <!-- Disk -->
                    <div class="laramedia-file-editor-edit-content-form-group">
                        <label for="laramedia-file-editor-disk" class="laramedia-file-editor-edit-content-label laramedia-file-editor-edit-content-title">Disk</label>
                        <select id="laramedia-file-editor-disk" class="laramedia-file-editor-form-control laramedia-file-editor-edit-content-data laramedia-select-filter">
                            @foreach (Laramedia::disks() as $key => $value)
                                <option value="{{ $key }}">{{ $value }}</option>
                            @endforeach
                        </select>
                    </div>

                    <!-- Visibility -->
                    <div class="laramedia-file-editor-edit-content-form-group">
                        <label for="laramedia-file-editor-visibility" class="laramedia-file-editor-edit-content-label laramedia-file-editor-edit-content-title">Visibility</label>
                        <select id="laramedia-file-editor-visibility" class="laramedia-file-editor-form-control laramedia-file-editor-edit-content-data laramedia-select-filter">
                            
                        </select>
                    </div>

                    <!-- File Url -->
                    <div class="laramedia-file-editor-edit-content-form-group laramedia-file-editor-public-form-group laramedia-hidden">
                        <label for="laramedia-file-editor-file-url" class="laramedia-file-editor-edit-content-label laramedia-file-editor-edit-content-title">File Url</label>
                        <input type="text" id="laramedia-file-editor-file-url" class="laramedia-file-editor-form-control laramedia-file-editor-edit-content-data" disabled value="">
                    </div>

                    <!-- Buttons -->
                    <div id="laramedia-file-editor-contents-buttons">
                        <a id="laramedia-file-editor-contents-preview-btn" class="laramedia-file-editor-btn laramedia-btn laramedia-btn-primary laramedia-hidden" target="_blank" href="">Preview</a>
                        <a id="laramedia-file-editor-contents-download-btn" class="laramedia-file-editor-btn laramedia-btn laramedia-btn-primary laramedia-hidden" target="_blank" href="">Download</a>
                    </div>
                </div>
            </div>

            {{-- Footer --}}
            <div id="laramedia-file-editor-footer" class="laramedia-modal-footer">
                <button id="laramedia-file-editor-update-btn" class="laramedia-modal-button">
                    @include('laramedia::icons.update')
                </button>
                <button id="laramedia-file-editor-trash-btn" class="laramedia-modal-button">
                    @include('laramedia::icons.trash')
                </button>
                <button id="laramedia-file-editor-restore-btn" class="laramedia-modal-button">
                    @include('laramedia::icons.restore')
                </button>
                <button id="laramedia-file-editor-destroy-btn" class="laramedia-modal-button">
                    @include('laramedia::icons.destroy')
                </button>
            </div>
        </div>
    </div>
</template>
