// Copyright 2022 Datafuse Labs.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

mod entry;

pub use entry::ObjectEntry;

mod mode;
pub use mode::ObjectMode;

mod iterate;
pub use iterate::EmptyObjectIterator;
pub use iterate::ObjectIterator;

mod metadata;
pub use metadata::ObjectMetadata;

mod multipart;
pub use multipart::ObjectMultipart;
pub use multipart::ObjectPart;

#[allow(clippy::module_inception)]
mod object;
pub use object::Object;

mod reader;
pub use reader::ObjectReader;

mod stream;
pub use stream::EmptyObjectStreamer;
pub use stream::ObjectPageStream;
pub use stream::ObjectPageStreamer;
pub use stream::ObjectStreamer;