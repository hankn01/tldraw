import { T } from '@tldraw/tlvalidate'
import { assetTypeValidator } from './records/TLAsset'
import { cameraTypeValidator } from './records/TLCamera'
import { documentTypeValidator } from './records/TLDocument'
import { instanceTypeValidator } from './records/TLInstance'
import { instancePageStateTypeValidator } from './records/TLInstancePageState'
import { instancePresenceTypeValidator } from './records/TLInstancePresence'
import { pageTypeValidator } from './records/TLPage'
import { pointerTypeValidator } from './records/TLPointer'
import { shapeTypeValidator } from './records/TLShape'
import { userdocumentTypeValidator } from './records/TLUserDocument'

/** @public */
export const defaultValidator = T.union('typeName', {
	pointer: pointerTypeValidator,
	asset: assetTypeValidator,
	camera: cameraTypeValidator,
	document: documentTypeValidator,
	instance: instanceTypeValidator,
	instance_page_state: instancePageStateTypeValidator,
	page: pageTypeValidator,
	shape: shapeTypeValidator,
	user_document: userdocumentTypeValidator,
	instance_presence: instancePresenceTypeValidator,
})