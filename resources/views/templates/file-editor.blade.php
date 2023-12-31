<template id="lfl-file-editor">
    <div id="lfl-file-editor-wrapper">
        <div id="lfl-file-editor-container">

            {{-- Header --}}
            <div id="lfl-file-editor-header">
                <button id="lfl-file-editor-previous" class="lfl-file-editor-buttons">
                    <<
                </button>
                <button id="lfl-file-editor-next" class="lfl-file-editor-buttons">
                    >>
                </button>
                <button id="lfl-file-editor-close" class="lfl-file-editor-buttons">
                    X
                </button>
            </div>

            {{-- Body --}}
            <div id="lfl-file-editor-body" >

                {{-- File Preview --}}
                <div id="lfl-file-editor-preview-container">
                    <div id="lfl-file-editor-preview-image-container" class="lfl-file-editor-item-preview-container">
                    
                    </div>
                    <div id="lfl-file-editor-preview-icon-container" class="lfl-file-editor-item-preview-container">
                        @include('laravel-files-library::icons.file', ['width' => 72, 'height' => 72])
                    </div>
                </div>

                {{-- File Contents --}}
                <div id="lfl-file-editor-contents">
                    {{-- File Name --}}
                    <div class="lfl-file-editor-display-content-form-group">
                        <span class="lfl-file-editor-display-content-title">Name:</span>
                        <span id="lfl-file-editor-name" class="lfl-file-editor-display-content-data"></span>
                    </div>

                    <!-- File Type -->
                    <div class="lfl-file-editor-display-content-form-group">
                        <span class="lfl-file-editor-display-content-title">File Type:</span>
                        <span id="lfl-file-editor-file-type" class="lfl-file-editor-display-content-data"></span>
                    </div>

                    <!-- Uploaded On -->
                    <div class="lfl-file-editor-display-content-form-group">
                        <span class="lfl-file-editor-display-content-title">Uploaded On:</span>
                        <span id="lfl-file-editor-uploaded-on" class="lfl-file-editor-display-content-data"></span>
                    </div>

                    <!-- File Size -->
                    <div class="lfl-file-editor-display-content-form-group">
                        <span class="lfl-file-editor-display-content-title">Size:</span>
                        <span id="lfl-file-editor-filesize" class="lfl-file-editor-display-content-data"></span>
                    </div>

                    <!-- Dimensions -->
                    <div class="lfl-file-editor-display-content-form-group lfl-file-editor-image-form-group">
                        <span class="lfl-file-editor-display-content-title">Dimensions:</span>
                        <span id="lfl-file-editor-dimensions" class="lfl-file-editor-display-content-data"></span>
                    </div>

                    <div id="lfl-file-editor-contents-separator"></div>

                    <!-- Title -->
                    <div class="lfl-file-editor-edit-content-form-group">
                        <label for="lfl-file-editor-title" class="lfl-file-editor-edit-content-label lfl-file-editor-edit-content-title">Title</label>
                        <input type="text" id="lfl-file-editor-title" class="lfl-file-editor-form-control lfl-file-editor-edit-content-data">
                    </div>

                    <!-- Alt Text -->
                    <div class="lfl-file-editor-edit-content-form-group lfl-file-editor-image-form-group lfl-hidden">
                        <label for="lfl-file-editor-alt-text" class="lfl-file-editor-edit-content-label lfl-file-editor-edit-content-title">Alt Text</label>
                        <input type="text" id="lfl-file-editor-alt-text" class="lfl-file-editor-form-control lfl-file-editor-edit-content-data">
                    </div>

                    <!-- Caption -->
                    <div class="lfl-file-editor-edit-content-form-group lfl-file-editor-image-form-group lfl-hidden">
                        <label for="lfl-file-editor-caption" class="lfl-file-editor-edit-content-label lfl-file-editor-edit-content-title">Caption</label>
                        <input type="text" id="lfl-file-editor-caption" class="lfl-file-editor-form-control lfl-file-editor-edit-content-data">
                    </div>

                    <!-- Description -->
                    <div class="lfl-file-editor-edit-content-form-group lfl-file-editor-image-form-group lfl-hidden">
                        <label for="lfl-file-editor-description" class="lfl-file-editor-edit-content-label lfl-file-editor-edit-content-title">Description</label>
                        <textarea id="lfl-file-editor-description" class="lfl-file-editor-form-control lfl-file-editor-edit-content-data"></textarea>
                    </div>

                    <!-- Disk -->
                    <div class="lfl-file-editor-edit-content-form-group">
                        <label for="lfl-file-editor-disk" class="lfl-file-editor-edit-content-label lfl-file-editor-edit-content-title">Disk</label>
                        <select id="lfl-file-editor-disk" class="lfl-file-editor-form-control lfl-file-editor-edit-content-data">
                            @foreach (LaramediaConfig::disks() as $key => $value)
                                <option value="{{ $key }}">{{ $value }}</option>
                            @endforeach
                        </select>
                    </div>

                    <!-- Visibility -->
                    <div class="lfl-file-editor-edit-content-form-group">
                        <label for="lfl-file-editor-visibility" class="lfl-file-editor-edit-content-label lfl-file-editor-edit-content-title">Visibility</label>
                        <select id="lfl-file-editor-visibility" class="lfl-file-editor-form-control lfl-file-editor-edit-content-data">
                            
                        </select>
                    </div>

                    <!-- File Url -->
                    <div class="lfl-file-editor-edit-content-form-group lfl-file-editor-public-form-group lfl-hidden">
                        <label for="lfl-file-editor-file-url" class="lfl-file-editor-edit-content-label lfl-file-editor-edit-content-title">File Url</label>
                        <input type="text" id="lfl-file-editor-file-url" class="lfl-file-editor-form-control lfl-file-editor-edit-content-data" disabled value="">
                    </div>

                    <!-- Buttons -->
                    <div id="lfl-file-editor-contents-buttons">
                        <a id="lfl-file-editor-contents-preview-btn" class="lfl-file-editor-contents-button lfl-hidden" target="_blank" href="">Preview</a>
                        <a id="lfl-file-editor-contents-download-btn" class="lfl-file-editor-contents-button lfl-hidden" target="_blank" href="">Download</a>
                    </div>
                </div>
            </div>

            {{-- Footer --}}
            <div id="lfl-file-editor-footer">
                <button id="lfl-file-editor-update-btn" class="lfl-file-editor-buttons">
                    @include('laravel-files-library::icons.update')
                </button>
                <button id="lfl-file-editor-trash-btn" class="lfl-file-editor-buttons">
                    @include('laravel-files-library::icons.trash')
                </button>
                <button id="lfl-file-editor-restore-btn" class="lfl-file-editor-buttons">
                    @include('laravel-files-library::icons.restore')
                </button>
                <button id="lfl-file-editor-destroy-btn" class="lfl-file-editor-buttons">
                    @include('laravel-files-library::icons.destroy')
                </button>
            </div>
        </div>
    </div>
</template>
