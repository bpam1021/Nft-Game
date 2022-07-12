class AnimationMapping {
  constructor(animationTrackName, boneName, isTop, isPosition) {
    this.animationTrackName = animationTrackName;
    this.boneName = boneName;
    this.isTop = isTop;
    this.isPosition = isPosition;
  }

  clone() {
    return new AnimationMapping(this.animationTrackName, this.boneName, this.isTop, this.isPosition);
  }
}

export const animationMappingConfig = [
  new AnimationMapping('mixamorigHips.position', 'Hips', false, true),
  new AnimationMapping('mixamorigHips.quaternion', 'Hips', false, false),
  new AnimationMapping('mixamorigSpine.quaternion', 'Spine', true, false),
  new AnimationMapping('mixamorigSpine1.quaternion', 'Chest', true, false),
  new AnimationMapping('mixamorigSpine2.quaternion', 'UpperChest', true, false),
  new AnimationMapping('mixamorigNeck.quaternion', 'Neck', true, false),
  new AnimationMapping('mixamorigHead.quaternion', 'Head', true, false),

  new AnimationMapping('mixamorigLeftShoulder.quaternion', 'Left_shoulder', true, false),
  new AnimationMapping('mixamorigLeftArm.quaternion', 'Left_arm', true, false),
  new AnimationMapping('mixamorigLeftForeArm.quaternion', 'Left_elbow', true, false),
  new AnimationMapping('mixamorigLeftHand.quaternion', 'Left_wrist', true, false),
  new AnimationMapping('mixamorigLeftHandMiddle1.quaternion', 'Left_middleFinger1', true, false),
  new AnimationMapping('mixamorigLeftHandMiddle2.quaternion', 'Left_middleFinger2', true, false),
  new AnimationMapping('mixamorigLeftHandMiddle3.quaternion', 'Left_middleFinger3', true, false),
  new AnimationMapping('mixamorigLeftHandThumb1.quaternion', 'Left_thumb0', true, false),
  new AnimationMapping('mixamorigLeftHandThumb2.quaternion', 'Left_thumb1', true, false),
  new AnimationMapping('mixamorigLeftHandThumb3.quaternion', 'Left_thumb2', true, false),
  new AnimationMapping('mixamorigLeftHandIndex1.quaternion', 'Left_indexFinger1', true, false),
  new AnimationMapping('mixamorigLeftHandIndex2.quaternion', 'Left_indexFinger2', true, false),
  new AnimationMapping('mixamorigLeftHandIndex3.quaternion', 'Left_indexFinger3', true, false),
  new AnimationMapping('mixamorigLeftHandRing1.quaternion', 'Left_ringFinger1', true, false),
  new AnimationMapping('mixamorigLeftHandRing2.quaternion', 'Left_ringFinger2', true, false),
  new AnimationMapping('mixamorigLeftHandRing3.quaternion', 'Left_ringFinger3', true, false),
  new AnimationMapping('mixamorigLeftHandPinky1.quaternion', 'Left_littleFinger1', true, false),
  new AnimationMapping('mixamorigLeftHandPinky2.quaternion', 'Left_littleFinger2', true, false),
  new AnimationMapping('mixamorigLeftHandPinky3.quaternion', 'Left_littleFinger3', true, false),

  new AnimationMapping('mixamorigRightShoulder.quaternion', 'Right_shoulder', true, false),
  new AnimationMapping('mixamorigRightArm.quaternion', 'Right_arm', true, false),
  new AnimationMapping('mixamorigRightForeArm.quaternion', 'Right_elbow', true, false),
  new AnimationMapping('mixamorigRightHand.quaternion', 'Right_wrist', true, false),
  new AnimationMapping('mixamorigRightHandMiddle1.quaternion', 'Right_middleFinger1', true, false),
  new AnimationMapping('mixamorigRightHandMiddle2.quaternion', 'Right_middleFinger2', true, false),
  new AnimationMapping('mixamorigRightHandMiddle3.quaternion', 'Right_middleFinger3', true, false),
  new AnimationMapping('mixamorigRightHandThumb1.quaternion', 'Right_thumb0', true, false),
  new AnimationMapping('mixamorigRightHandThumb2.quaternion', 'Right_thumb1', true, false),
  new AnimationMapping('mixamorigRightHandThumb3.quaternion', 'Right_thumb2', true, false),
  new AnimationMapping('mixamorigRightHandIndex1.quaternion', 'Right_indexFinger1', true, false),
  new AnimationMapping('mixamorigRightHandIndex2.quaternion', 'Right_indexFinger2', true, false),
  new AnimationMapping('mixamorigRightHandIndex3.quaternion', 'Right_indexFinger3', true, false),
  new AnimationMapping('mixamorigRightHandRing1.quaternion', 'Right_ringFinger1', true, false),
  new AnimationMapping('mixamorigRightHandRing2.quaternion', 'Right_ringFinger2', true, false),
  new AnimationMapping('mixamorigRightHandRing3.quaternion', 'Right_ringFinger3', true, false),
  new AnimationMapping('mixamorigRightHandPinky1.quaternion', 'Right_littleFinger1', true, false),
  new AnimationMapping('mixamorigRightHandPinky2.quaternion', 'Right_littleFinger2', true, false),
  new AnimationMapping('mixamorigRightHandPinky3.quaternion', 'Right_littleFinger3', true, false),

  new AnimationMapping('mixamorigRightUpLeg.quaternion', 'Right_leg', false, false),
  new AnimationMapping('mixamorigRightLeg.quaternion', 'Right_knee', false, false),
  new AnimationMapping('mixamorigRightFoot.quaternion', 'Right_ankle', false, false),
  new AnimationMapping('mixamorigRightToeBase.quaternion', 'Right_toe', false, false),

  new AnimationMapping('mixamorigLeftUpLeg.quaternion', 'Left_leg', false, false),
  new AnimationMapping('mixamorigLeftLeg.quaternion', 'Left_knee', false, false),
  new AnimationMapping('mixamorigLeftFoot.quaternion', 'Left_ankle', false, false),
  new AnimationMapping('mixamorigLeftToeBase.quaternion', 'Left_toe', false, false),
];
