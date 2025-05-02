// Glitch characters and symbols
const glitchChars = {
    lowercaseLetters: {
        'a': ['ą', 'ä', 'à', 'á', 'â', 'ã', 'å', 'α', 'ɐ', 'ɑ', 'ª'],
        'b': ['ƀ', 'ɓ', 'ƃ', 'ƅ', 'ß', 'þ', 'Þ', 'ƕ'],
        'c': ['ç', 'ć', 'č', 'ĉ', 'ċ', '¢', 'ƈ', 'ȼ'],
        'd': ['đ', 'ď', 'ɗ', 'ɖ', 'ð', 'ƌ'],
        'e': ['ę', 'è', 'é', 'ê', 'ë', 'ě', 'ė', 'ē', 'ε', 'з', 'ǝ', 'ɘ'],
        'f': ['ƒ', 'ſ', 'ʄ'],
        'g': ['ğ', 'ǧ', 'ģ', 'ġ', 'ǥ', 'ɠ', 'ɡ', 'ɢ'],
        'h': ['ħ', 'ĥ', 'ɦ', 'ɥ', 'ẖ'],
        'i': ['į', 'ì', 'í', 'î', 'ï', 'ı', 'ɨ', 'ⅰ', 'ί'],
        'j': ['ĵ', 'ǰ', 'ȷ', 'ɉ'],
        'k': ['ķ', 'ĸ', 'ƙ', 'ꝁ', 'ꝃ', 'ꝅ'],
        'l': ['ĺ', 'ļ', 'ľ', 'ŀ', 'ł', 'ƚ', 'ɫ', 'ⅼ'],
        'm': ['ɱ', 'ɯ', 'ɰ', 'ⅿ'],
        'n': ['ñ', 'ń', 'ņ', 'ň', 'ŉ', 'ŋ', 'ɲ', 'ɳ'],
        'o': ['ô', 'ò', 'ó', 'ö', 'õ', 'ø', 'ǫ', 'ő', 'ơ', 'ο', 'ω'],
        'p': ['þ', 'ƥ', 'ƿ', 'ρ'],
        'q': ['ʠ', 'ɋ', 'ꝗ', 'ꝙ'],
        'r': ['ŕ', 'ŗ', 'ř', 'ɍ', 'ɼ', 'ɽ', 'ɾ', 'ɿ'],
        's': ['ś', 'ŝ', 'ş', 'š', 'ș', 'ʂ', 'ȿ'],
        't': ['ţ', 'ť', 'ŧ', 'ƭ', 'ʈ', 'ț'],
        'u': ['µ', 'ù', 'ú', 'û', 'ü', 'ũ', 'ū', 'ŭ', 'ů', 'ű', 'ų', 'ư', 'ʉ', 'υ'],
        'v': ['ʋ', 'ʌ', 'ⱴ', 'ⱱ', 'ν'],
        'w': ['ŵ', 'ẁ', 'ẃ', 'ẅ', 'ẘ', 'ω', 'ɯ'],
        'x': ['×', '⤫', '⤬', '⨯', 'ж', 'χ'],
        'y': ['ý', 'ÿ', 'ŷ', 'ƴ', 'ȳ', 'ɏ', 'ʎ', 'ʏ', 'γ'],
        'z': ['ź', 'ż', 'ž', 'ƶ', 'ȥ', 'ɀ', 'ʐ', 'ʑ']
    },
    uppercaseLetters: {
        'A': ['Ā', 'Ă', 'Ą', 'Ǎ', 'Ǟ', 'Ǡ', 'Ǻ', 'Ȁ', 'Ȃ', 'Ȧ', 'Α', 'Λ', 'Δ'],
        'B': ['Ɓ', 'Ƃ', 'Ƀ', 'Ḃ', 'Ḅ', 'ẞ', 'β'],
        'C': ['Ç', 'Ć', 'Ĉ', 'Ċ', 'Č', 'Ƈ', 'Ȼ'],
        'D': ['Ð', 'Ď', 'Đ', 'Ɗ', 'Ɖ', 'Ƌ'],
        'E': ['È', 'É', 'Ê', 'Ë', 'Ē', 'Ĕ', 'Ė', 'Ę', 'Ě', 'Ǝ', 'Ɛ', 'Έ', 'Σ'],
        'F': ['Ƒ', 'Ḟ'],
        'G': ['Ĝ', 'Ğ', 'Ġ', 'Ģ', 'Ɠ', 'Ǥ', 'Ǧ', 'Ǵ'],
        'H': ['Ĥ', 'Ħ', 'Ȟ'],
        'I': ['Ì', 'Í', 'Î', 'Ï', 'Ĩ', 'Ī', 'Ĭ', 'Į', 'İ', 'Ɨ', 'Ι', 'Π'],
        'J': ['Ĵ', 'Ɉ'],
        'K': ['Ķ', 'Ƙ', 'Ǩ', 'Κ'],
        'L': ['Ĺ', 'Ļ', 'Ľ', 'Ŀ', 'Ł', 'Ƚ'],
        'M': ['Ɯ', 'Μ'],
        'N': ['Ñ', 'Ń', 'Ņ', 'Ň', 'Ŋ', 'Ɲ', 'Ǹ', 'Ν'],
        'O': ['Ò', 'Ó', 'Ô', 'Õ', 'Ö', 'Ø', 'Ō', 'Ŏ', 'Ő', 'Ơ', 'Ǒ', 'Ǫ', 'Ο', 'Θ', 'Ω'],
        'P': ['Ƥ', 'Ῥ', 'Ρ'],
        'Q': ['Ɋ', 'Ǫ'],
        'R': ['Ŕ', 'Ŗ', 'Ř', 'Ʀ', 'Ȑ', 'Ȓ', 'Ɍ'],
        'S': ['Ś', 'Ŝ', 'Ş', 'Š', 'Ș', 'Ṡ', '§'],
        'T': ['Ţ', 'Ť', 'Ŧ', 'Ƭ', 'Ʈ', 'Ț', 'Ṫ', 'Τ'],
        'U': ['Ù', 'Ú', 'Û', 'Ü', 'Ũ', 'Ū', 'Ŭ', 'Ů', 'Ű', 'Ų', 'Ư', 'Ǔ', 'Ǖ', 'Ǘ', 'Ǚ', 'Ǜ'],
        'V': ['Ʋ', 'Ʌ', 'Ṽ'],
        'W': ['Ŵ', 'Ẁ', 'Ẃ', 'Ẅ', 'Ẇ', 'Ẉ', 'Ω'],
        'X': ['Ẋ', 'Ẍ', 'Χ'],
        'Y': ['Ý', 'Ŷ', 'Ÿ', 'Ƴ', 'Ȳ', 'Ɏ', 'Ẏ', 'Υ', 'Ψ'],
        'Z': ['Ź', 'Ż', 'Ž', 'Ƶ', 'Ȥ', 'Ẓ', 'Ẕ']
    },
    numbers: {
        '0': ['⓪', '⓿', '⁰', '₀', 'Ο', 'ο', '٠', '۰', '߀', '०', '০', '੦', '૦', '୦', '௦', '౦', '೦', '൦', '๐', '໐', '၀', '႐', '០', '᠐', '᥆', '᧐', '᪀', '᪐', '᭐', '᮰', '᱀', '᱐'],
        '1': ['①', '⓵', '¹', '₁', 'Ι', 'ι', '١', '۱', '߁', '१', '১', '੧', '૧', '୧', '௧', '౧', '೧', '൧', '๑', '໑', '၁', '႑', '១', '᠑', '᥇', '᧑', '᪁'],
        '2': ['②', '⓶', '²', '₂', '٢', '۲', '߂', '२', '২', '੨', '૨', '୨', '௨', '౨', '೨', '൨', '๒', '໒', '၂', '႒', '២', '᠒', '᥈', '᧒', '᪂'],
        '3': ['③', '⓷', '³', '₃', '٣', '۳', '߃', '३', '৩', '੩', '૩', '୩', '௩', '౩', '೩', '൩', '๓', '໓', '၃', '႓', '៣', '᠓', '᥉', '᧓', '᪃'],
        '4': ['④', '⓸', '⁴', '₄', '٤', '۴', '߄', '४', '৪', '੪', '૪', '୪', '௪', '౪', '೪', '൪', '๔', '໔', '၄', '႔', '៤', '᠔', '᥊', '᧔', '᪄'],
        '5': ['⑤', '⓹', '⁵', '₅', '٥', '۵', '߅', '५', '৫', '੫', '૫', '୫', '௫', '౫', '೫', '൫', '๕', '໕', '၅', '႕', '៥', '᠕', '᥋', '᧕', '᪅'],
        '6': ['⑥', '⓺', '⁶', '₆', '٦', '۶', '߆', '६', '৬', '੬', '૬', '୬', '௬', '౬', '೬', '൬', '๖', '໖', '၆', '႖', '៦', '᠖', '᥌', '᧖', '᪆'],
        '7': ['⑦', '⓻', '⁷', '₇', '٧', '۷', '߇', '७', '৭', '੭', '૭', '୭', '௭', '౭', '೭', '൭', '๗', '໗', '၇', '႗', '៧', '᠗', '᥍', '᧗', '᪇'],
        '8': ['⑧', '⓼', '⁸', '₈', '٨', '۸', '߈', '८', '৮', '੮', '૮', '୮', '௮', '౮', '೮', '൮', '๘', '໘', '၈', '႘', '៨', '᠘', '᥎', '᧘', '᪈'],
        '9': ['⑨', '⓽', '⁹', '₉', '٩', '۹', '߉', '९', '৯', '੯', '૯', '୯', '௯', '౯', '೯', '൯', '๙', '໙', '၉', '႙', '៩', '᠙', '᥏', '᧙', '᪉']
    },
    symbols: ['|', '•', '√', 'Ω', 'Π', 'μ', '×', '¶', '∆', '§', '¢', '£', '€', '¥', '↑', '←', '↓', '→', '°', '∞', '≠', '℅', '‰', '™', '₹', '¥', '₱', '€', '⅑', '⅖', '³', '⅘', '⅝', '⁶', 'ⁿ', '∅', '@', '#', '_', '&', '+', '‽', '¿', '¡', '!'],
    zalgoMarks: [
        '\u030d', '\u030e', '\u0304', '\u0305', '\u033f', '\u0311', '\u0306', '\u0310',
        '\u0352', '\u0357', '\u0351', '\u0307', '\u0308', '\u030a', '\u0342', '\u0343',
        '\u0344', '\u034a', '\u034b', '\u034c', '\u0303', '\u0302', '\u030c', '\u0350',
        '\u0300', '\u0301', '\u030b', '\u030f', '\u0312', '\u0313', '\u0314', '\u033d',
        '\u0309', '\u0363', '\u0364', '\u0365', '\u0366', '\u0367', '\u0368', '\u0369',
        '\u036a', '\u036b', '\u036c', '\u036d', '\u036e', '\u036f', '\u033e', '\u035b',
        '\u0346', '\u031a'
    ],
    upside_down: {
        'a': 'ɐ', 'b': 'q', 'c': 'ɔ', 'd': 'p', 'e': 'ǝ', 'f': 'ɟ',
        'g': 'ƃ', 'h': 'ɥ', 'i': 'ᴉ', 'j': 'ɾ', 'k': 'ʞ', 'l': 'l',
        'm': 'ɯ', 'n': 'u', 'o': 'o', 'p': 'd', 'q': 'b', 'r': 'ɹ',
        's': 's', 't': 'ʇ', 'u': 'n', 'v': 'ʌ', 'w': 'ʍ', 'x': 'x',
        'y': 'ʎ', 'z': 'z', 'A': '∀', 'B': 'B', 'C': 'Ɔ', 'D': 'D',
        'E': 'Ǝ', 'F': 'Ⅎ', 'G': 'פ', 'H': 'H', 'I': 'I', 'J': 'ſ',
        'K': 'ʞ', 'L': '˥', 'M': 'W', 'N': 'N', 'O': 'O', 'P': 'Ԁ',
        'Q': 'Q', 'R': 'R', 'S': 'S', 'T': '┴', 'U': '∩', 'V': 'Λ',
        'W': 'M', 'X': 'X', 'Y': '⅄', 'Z': 'Z', '0': '0', '1': 'Ɩ',
        '2': 'ᄅ', '3': 'Ɛ', '4': 'ㄣ', '5': 'ϛ', '6': '9', '7': 'ㄥ',
        '8': '8', '9': '6', '.': '˙', ',': '\'', '\'': ',', '"': ',,',
        '`': ',', '?': '¿', '!': '¡', '(': ')', ')': '(', '[': ']',
        ']': '[', '{': '}', '}': '{', '<': '>', '>': '<', '&': '⅋',
        '_': '‾'
    }
};

// Global settings
let settings = {
    glitchIntensity: 5,
    charSubstitution: 5,
    textReversal: 3,
    symbolInsertion: 5,
    useRotation: true,
    useInversion: true,
    useVertical: true,
    useDiacritics: true
};

// Saved outputs
let savedOutputs = [];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeTabs();
    initializeSliders();
    initializeButtons();
    toggleSettings();
    loadSavedOutputs();
    
    // Debug statement - to be removed in production
    console.log("Anathema Translator initialized");
});

// Initialize tabs
function initializeTabs() {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Hide all content
            document.querySelectorAll('.content').forEach(content => {
                content.classList.remove('active');
            });
            
            // Show content for active tab
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
}

// Initialize sliders
function initializeSliders() {
    // Glitch Intensity slider
    const glitchIntensitySlider = document.getElementById('glitchIntensity');
    const glitchIntensityValue = document.getElementById('glitchIntensityValue');
    
    glitchIntensitySlider.addEventListener('input', function() {
        glitchIntensityValue.textContent = this.value;
        settings.glitchIntensity = parseInt(this.value);
    });
    
    // Character Substitution slider
    const charSubstitutionSlider = document.getElementById('charSubstitution');
    const charSubstitutionValue = document.getElementById('charSubstitutionValue');
    
    charSubstitutionSlider.addEventListener('input', function() {
        charSubstitutionValue.textContent = this.value;
        settings.charSubstitution = parseInt(this.value);
    });
    
    // Text Reversal slider
    const textReversalSlider = document.getElementById('textReversal');
    const textReversalValue = document.getElementById('textReversalValue');
    
    textReversalSlider.addEventListener('input', function() {
        textReversalValue.textContent = this.value;
        settings.textReversal = parseInt(this.value);
    });
    
    // Symbol Insertion slider
    const symbolInsertionSlider = document.getElementById('symbolInsertion');
    const symbolInsertionValue = document.getElementById('symbolInsertionValue');
    
    symbolInsertionSlider.addEventListener('input', function() {
        symbolInsertionValue.textContent = this.value;
        settings.symbolInsertion = parseInt(this.value);
    });
    
    // Checkboxes
    document.getElementById('useRotation').addEventListener('change', function() {
        settings.useRotation = this.checked;
    });
    
    document.getElementById('useInversion').addEventListener('change', function() {
        settings.useInversion = this.checked;
    });
    
    document.getElementById('useVertical').addEventListener('change', function() {
        settings.useVertical = this.checked;
    });
    
    document.getElementById('useDiacritics').addEventListener('change', function() {
        settings.useDiacritics = this.checked;
    });
}

// Initialize buttons
function initializeButtons() {
    // Transform button
    document.getElementById('transformBtn').addEventListener('click', transformText);
    
    // Clear button
    document.getElementById('clearBtn').addEventListener('click', function() {
        document.getElementById('inputText').value = '';
        document.getElementById('outputText').textContent = 'Transformed text will appear here...';
    });
    
    // Copy button
    document.getElementById('copyBtn').addEventListener('click', function() {
        const outputText = document.getElementById('outputText').textContent;
        navigator.clipboard.writeText(outputText).then(function() {
            const copyBtn = document.getElementById('copyBtn');
            copyBtn.textContent = 'Copied!';
            setTimeout(function() {
                copyBtn.textContent = 'Copy';
            }, 2000);
        });
    });
    
    // Save button
    document.getElementById('saveBtn').addEventListener('click', saveOutput);
    
    // Preset buttons
    const presetButtons = document.querySelectorAll('.preset-btn');
    presetButtons.forEach(button => {
        button.addEventListener('click', function() {
            const preset = this.getAttribute('data-preset');
            applyPreset(preset);
        });
    });
    
    // Toggle settings
    document.getElementById('toggleSettings').addEventListener('click', toggleSettings);
}

// Toggle settings panel
function toggleSettings() {
    const settingsContent = document.getElementById('settingsContent');
    const settingsToggleIcon = document.getElementById('settingsToggleIcon');
    
    if (settingsContent.style.display === 'none') {
        settingsContent.style.display = 'block';
        settingsToggleIcon.textContent = '▼';
    } else {
        settingsContent.style.display = 'none';
        settingsToggleIcon.textContent = '▶';
    }
}

// Apply preset settings
function applyPreset(preset) {
    switch(preset) {
        case 'mild':
            settings.glitchIntensity = 3;
            settings.charSubstitution = 2;
            settings.textReversal = 1;
            settings.symbolInsertion = 2;
            settings.useRotation = true;
            settings.useInversion = false;
            settings.useVertical = false;
            settings.useDiacritics = true;
            break;
        case 'medium':
            settings.glitchIntensity = 5;
            settings.charSubstitution = 5;
            settings.textReversal = 3;
            settings.symbolInsertion = 4;
            settings.useRotation = true;
            settings.useInversion = true;
            settings.useVertical = true;
            settings.useDiacritics = true;
            break;
        case 'extreme':
            settings.glitchIntensity = 9;
            settings.charSubstitution = 8;
            settings.textReversal = 7;
            settings.symbolInsertion = 9;
            settings.useRotation = true;
            settings.useInversion = true;
            settings.useVertical = true;
            settings.useDiacritics = true;
            break;
        case 'zalgo':
            settings.glitchIntensity = 7;
            settings.charSubstitution = 3;
            settings.textReversal = 1;
            settings.symbolInsertion = 1;
            settings.useRotation = false;
            settings.useInversion = false;
            settings.useVertical = false;
            settings.useDiacritics = true;
            break;
        case 'reverse':
            settings.glitchIntensity = 4;
            settings.charSubstitution = 2;
            settings.textReversal = 10;
            settings.symbolInsertion = 2;
            settings.useRotation = false;
            settings.useInversion = true;
            settings.useVertical = false;
            settings.useDiacritics = false;
            break;
        case 'random':
            settings.glitchIntensity = Math.floor(Math.random() * 10) + 1;
            settings.charSubstitution = Math.floor(Math.random() * 10) + 1;
            settings.textReversal = Math.floor(Math.random() * 10) + 1;
            settings.symbolInsertion = Math.floor(Math.random() * 10) + 1;
            settings.useRotation = Math.random() > 0.5;
            settings.useInversion = Math.random() > 0.5;
            settings.useVertical = Math.random() > 0.5;
            settings.useDiacritics = Math.random() > 0.5;
            break;
    }
    
    // Update UI to reflect settings
    document.getElementById('glitchIntensity').value = settings.glitchIntensity;
    document.getElementById('glitchIntensityValue').textContent = settings.glitchIntensity;
    
    document.getElementById('charSubstitution').value = settings.charSubstitution;
    document.getElementById('charSubstitutionValue').textContent = settings.charSubstitution;
    
    document.getElementById('textReversal').value = settings.textReversal;
    document.getElementById('textReversalValue').textContent = settings.textReversal;
    
    document.getElementById('symbolInsertion').value = settings.symbolInsertion;
    document.getElementById('symbolInsertionValue').textContent = settings.symbolInsertion;
    
    document.getElementById('useRotation').checked = settings.useRotation;
    document.getElementById('useInversion').checked = settings.useInversion;
    document.getElementById('useVertical').checked = settings.useVertical;
    document.getElementById('useDiacritics').checked = settings.useDiacritics;
}

// Transform text function
function transformText() {
    const inputText = document.getElementById('inputText').value;
    if (!inputText) return;
    
    let outputText = processText(inputText);
    
    document.getElementById('outputText').textContent = outputText;
    console.log("Text transformed:", outputText);
}

// Process text with glitches based on settings
function processText(text) {
    // Break the text into words
    let words = text.split(' ');
    let output = [];
    
    // Apply transforms based on settings
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        
        // Character substitution
        if (settings.charSubstitution > 0) {
            word = substituteCharacters(word, settings.charSubstitution / 10);
        }
        
        // Add diacritics (Zalgo effect)
        if (settings.useDiacritics && Math.random() < settings.glitchIntensity / 20) {
            word = addDiacritics(word, Math.ceil(settings.glitchIntensity / 3));
        }
        
        // Rotate characters
        if (settings.useRotation && Math.random() < settings.glitchIntensity / 20) {
            word = rotateCharacters(word);
        }
        
        // Insert random symbols
        if (settings.symbolInsertion > 0 && Math.random() < settings.symbolInsertion / 10) {
            word = insertSymbols(word, Math.ceil(settings.symbolInsertion / 3));
        }
        
        output.push(word);
        
        // Random decision to add glitchy elements between words
        if (Math.random() < settings.glitchIntensity / 10) {
            // Add random symbols or text fragments
            output.push(getRandomGlitchElement());
        }
    }
    
    let result = output.join(' ');
    
    // Text reversal - reverse portions of the text
    if (settings.textReversal > 0 && settings.useInversion) {
        result = applyTextReversal(result, settings.textReversal / 10);
    }
    
    // Add vertical text fragments if enabled
    if (settings.useVertical && Math.random() < settings.glitchIntensity / 15) {
        result = addVerticalText(result);
    }
    
    return result;
}

// Substitute characters with similar-looking alternatives
function substituteCharacters(text, probability) {
    let result = '';
    
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        
        // Check if we should substitute this character
        if (Math.random() < probability) {
            // Lowercase letter
            if (/[a-z]/.test(char) && glitchChars.lowercaseLetters[char]) {
                const alternatives = glitchChars.lowercaseLetters[char];
                result += alternatives[Math.floor(Math.random() * alternatives.length)];
            }
            // Uppercase letter
            else if (/[A-Z]/.test(char) && glitchChars.uppercaseLetters[char]) {
                const alternatives = glitchChars.uppercaseLetters[char];
                result += alternatives[Math.floor(Math.random() * alternatives.length)];
            }
            // Number
            else if (/[0-9]/.test(char) && glitchChars.numbers[char]) {
                const alternatives = glitchChars.numbers[char];
                result += alternatives[Math.floor(Math.random() * alternatives.length)];
            }
            // No substitution available, keep original
            else {
                result += char;
            }
        } else {
            // Keep original character
            result += char;
        }
    }
    
    return result;
}

// Add random diacritical marks to create Zalgo text effect
function addDiacritics(text, intensity) {
    let result = '';
    
    for (let i = 0; i < text.length; i++) {
        result += text[i];
        
        // Add random number of diacritical marks based on intensity
        const markCount = Math.floor(Math.random() * intensity) + 1;
        
        for (let j = 0; j < markCount; j++) {
            const markIndex = Math.floor(Math.random() * glitchChars.zalgoMarks.length);
            result += glitchChars.zalgoMarks[markIndex];
        }
    }
    
    return result;
}

// Rotate or flip characters (using upside-down mapping)
function rotateCharacters(text) {
    let result = '';
    
    // 50% chance to flip the entire word upside down
    if (Math.random() < 0.5) {
        // Reverse the text for upside-down effect
        const reversed = text.split('').reverse().join('');
        
        // Map each character to its upside-down version
        for (let i = 0; i < reversed.length; i++) {
            const char = reversed[i];
            result += glitchChars.upside_down[char] || char;
        }
    } else {
        // Just rotate some characters
        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            
            // 30% chance to rotate this character
            if (Math.random() < 0.3) {
                // Try to find an alternative that looks like a rotated version
                if (/[bpdqmnwMW]/.test(char)) {
                    switch(char) {
                        case 'b': result += 'q'; break;
                        case 'p': result += 'd'; break;
                        case 'd': result += 'p'; break;
                        case 'q': result += 'b'; break;
                        case 'n': result += 'u'; break;
                        case 'm': result += 'w'; break;
                        case 'w': result += 'm'; break;
                        case 'M': result += 'W'; break;
                        case 'W': result += 'M'; break;
                        default: result += char;
                    }
                } else {
                    result += char;
                }
            } else {
                result += char;
            }
        }
    }
    
    return result;
}

// Insert random symbols into text
function insertSymbols(text, count) {
    let result = text;
    
    for (let i = 0; i < count; i++) {
        // Get random position to insert
        const position = Math.floor(Math.random() * (result.length + 1));
        
        // Get random symbol
        const symbol = glitchChars.symbols[Math.floor(Math.random() * glitchChars.symbols.length)];
        
        // Insert the symbol
        result = result.substring(0, position) + symbol + result.substring(position);
    }
    
    return result;
}

// Get a random glitchy element to insert between words
function getRandomGlitchElement() {
    const elements = [
        // Brackets with or without content
        '[ ]', '{ }', '( )', '</ >', '/*_*/', '< >', '""', '',
        
        // Random symbols
        '...', '---', '|||', '////', '####', '@@@@', '????', '!!!!',
        
        // Glitched fragments
        'ERR0R', 'CORRUPTED', 'NULL', 'VOID', 'GLITCH', 'ERROR', 'DELETED', 'REDACTED',
        '101010', '010101', 'SYNTAX', 'BREAK', '404', 'MISSING'
    ];
    
    let element = elements[Math.floor(Math.random() * elements.length)];
    
    // 30% chance to add content inside brackets
    if (element.includes(' ') && Math.random() < 0.3) {
        const randomContent = elements[Math.floor(Math.random() * elements.length)];
        element = element.replace(' ', randomContent);
    }
    
    return element;
}

// Apply text reversal to portions of the text
function applyTextReversal(text, probability) {
    // Split text into words again
    let words = text.split(' ');
    
    // Determine if we should apply full reversal
    if (Math.random() < probability * 0.3) {
        // Reverse the entire text
        return words.reverse().join(' ');
    }
    
    // Apply partial reversals
    for (let i = 0; i < words.length; i++) {
        // Random decision to reverse this word
        if (Math.random() < probability) {
            words[i] = words[i].split('').reverse().join('');
        }
        
        // Chance to convert to upside-down text instead of reversal
        if (Math.random() < probability * 0.5) {
            let upsideDown = '';
            for (let j = 0; j < words[i].length; j++) {
                const char = words[i][j];
                upsideDown += glitchChars.upside_down[char] || char;
            }
            words[i] = upsideDown;
        }
    }
    
    return words.join(' ');
}

// Add vertical text fragments
function addVerticalText(text) {
    const words = text.split(' ');
    let verticalPart = '';
    
    // Random position to insert vertical text
    const position = Math.floor(Math.random() * words.length);
    
    // Choose a random word to make vertical
    const wordToMakeVertical = words[Math.floor(Math.random() * words.length)];
    
    // Create vertical representation
    for (let i = 0; i < wordToMakeVertical.length; i++) {
        verticalPart += wordToMakeVertical[i] + '\n';
    }
    
    // Insert vertical text at random position
    words.splice(position, 0, verticalPart);
    
    return words.join(' ');
}

// Save output function
function saveOutput() {
    const inputText = document.getElementById('inputText').value;
    const outputText = document.getElementById('outputText').textContent;
    
    if (outputText && outputText !== 'Transformed text will appear here...') {
        // Create a new saved item
        const savedItem = {
            id: Date.now(),
            input: inputText,
            output: outputText,
            date: new Date().toLocaleString()
        };
        
        // Add to saved outputs
        savedOutputs.unshift(savedItem);
        
        // Store in localStorage
        localStorage.setItem('anathemaSavedOutputs', JSON.stringify(savedOutputs));
        
        // Update the display
        updateSavedOutputsDisplay();
        
        // Provide feedback
        alert('Output saved successfully!');
    }
}

// Load saved outputs from localStorage
function loadSavedOutputs() {
    const saved = localStorage.getItem('anathemaSavedOutputs');
    
    if (saved) {
        savedOutputs = JSON.parse(saved);
        updateSavedOutputsDisplay();
    }
}

// Update the saved outputs display
function updateSavedOutputsDisplay() {
    const savedOutputsList = document.getElementById('savedOutputsList');
    
    if (savedOutputs.length === 0) {
        savedOutputsList.innerHTML = '<p>No saved outputs yet. Transform some text and save it to see it here.</p>';
        return;
    }
    
    let html = '';
    
    savedOutputs.forEach(item => {
        html += `
            <div class="saved-item" data-id="${item.id}">
                <div class="saved-content">${item.output}</div>
                <div class="saved-actions">
                    <span>${item.date}</span>
                    <div>
                        <button class="saved-action-btn load-btn" data-id="${item.id}">Load</button>
                        <button class="saved-action-btn delete-btn" data-id="${item.id}">Delete</button>
                    </div>
                </div>
            </div>
        `;
    });
    
    savedOutputsList.innerHTML = html;
    
    // Add event listeners to buttons
    document.querySelectorAll('.load-btn').forEach(button => {
        button.addEventListener('click', function() {
            const id = parseInt(this.getAttribute('data-id'));
            loadSavedOutput(id);
        });
    });
    
    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', function() {
            const id = parseInt(this.getAttribute('data-id'));
            deleteSavedOutput(id);
        });
    });
}

// Load a saved output
function loadSavedOutput(id) {
    const savedItem = savedOutputs.find(item => item.id === id);
    
    if (savedItem) {
        document.getElementById('inputText').value = savedItem.input;
        document.getElementById('outputText').textContent = savedItem.output;
        
        // Switch to translator tab
        document.querySelector('.tab[data-tab="translator"]').click();
    }
}

// Delete a saved output
function deleteSavedOutput(id) {
    if (confirm('Are you sure you want to delete this saved output?')) {
        savedOutputs = savedOutputs.filter(item => item.id !== id);
        
        // Update localStorage
        localStorage.setItem('anathemaSavedOutputs', JSON.stringify(savedOutputs));
        
        // Update display
        updateSavedOutputsDisplay();
    }
}