from Cocoa import *
from QTKit import *
URL = NSURL.URLWithString_("http://bitcast.vimeo.com/vimeo/v2/132/913/13291308.mp4?e=1262394878&h=73e35b20e0a56715014f6d93ecdb5c7f")
time = QTMakeTimeWithTimeInterval(0)
time2 = QTMakeTimeWithTimeInterval(.000001)
timerange = QTMakeTimeRange(time,time2)
openAttributes = { QTMovieURLAttribute: URL, QTMovieEditableAttribute: True }
saveAttributes = {QTMovieFlatten: True}
mov, error = QTMovie.movieWithAttributes_error_(openAttributes, None)

mov.movieAttributes()[QTMovieLoadStateAttribute]

mov.insertEmptySegmentAt_(timerange)
mov.deleteSegment_(timerange)
success, error = mov.writeToFile_withAttributes_error_("/tmp/mov1", saveAttributes, None)
