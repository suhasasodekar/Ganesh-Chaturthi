// Function to open a share dialog
function share() {
    // Replace "YOUR_SHARE_URL" with the actual URL you want to share
    const shareUrl = 'Your Share URL';
    
    // Check if the Web Share API is available
    if (navigator.share) {
        navigator.share({
            title: 'Check out this link!',
            text: 'I thought you might find this interesting:',
            url: shareUrl
        })
        .then(() => console.log('Shared successfully'))
        .catch(error => console.error('Error sharing:', error));
    } else {
        // Fallback for browsers that don't support Web Share API
        const shareWindow = window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`, '_blank');
        if (!shareWindow) {
            alert('Please allow pop-ups to share.');
        }
    }
}

// Attach the share function to the button click event
document.addEventListener('DOMContentLoaded', function() {
    const shareButton = document.getElementById('shareButton');
    shareButton.addEventListener('click', function(event) {
        event.preventDefault();
        share();
    });
});
